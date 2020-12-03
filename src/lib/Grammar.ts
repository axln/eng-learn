import {
  Aspect,
  ContractionRule,
  GrammarNumber,
  GrammarPerson,
  ModalVerb,
  Pronoun,
  SentenceParams,
  Tense,
  VerbForm
} from '~/type';
import { specialVerbs } from '~/lib/SpecialVerbs';
import { irregularVerbs } from '~/lib/IrregularVerbs';
import { verbs } from '~/lib/Verbs';
import { contractions } from '~/lib/Contractions';
import { pronouns } from '~/lib/Pronouns';
import { objects } from '~/lib/Objects';
import { capitalize, equalArrays, reorderArr } from '~/lib/Helper';
import { aspects } from '~/lib/Aspects';

export function renderSentence(params: SentenceParams): string[] {
  const subject = pronouns[params.pronounKey];
  // sentence is started from subject
  let members: string[] = [`${subject.spelling.subject}:pronoun`];
  members = members.concat(renderVerbChain(params));

  const objectText = getObjectText(params);
  if (objectText) {
    members.push(`${getObjectText(params)}:object`);
  }

  members.push(`${params.interrogative ? '?' : '.'}:end`);

  if (params.interrogative) {
    // for interrogative sentences just swap subject with aux
    members = reorderArr(members, 1, 0);
  }

  if (params.applyContractions) {
    if (params.interrogative && params.negative) {
      // move "not" in front of "subject" to find possible contractions
      const reorderedMembers = reorderArr(members, 2, 1);
      const contractedMembers = applyContractions(reorderedMembers);

      // have contractions been applied?
      if (!equalArrays(reorderedMembers, contractedMembers)) {
        members = contractedMembers;
      }
    } else {
      members = applyContractions(members);
    }
  }

  if (members.length > 0) {
    members[0] = capitalize(members[0]);
  }

  //console.log('members:', members);

  return members;
}

export function renderVerbChain(params: SentenceParams): string[] {
  const aspect = aspects[params.aspect];
  // will be mutated
  const verbChain = [...aspects[params.aspect].verbChain];
  const mainVerbRoot = params.verbKey.split(':')[0];
  const subject = pronouns[params.pronounKey];

  // this condition is the most complex part of the English grammar
  // it states that in simple past or present you can skip DO aux verb in either of the
  // following cases:
  // - affirmative sentence
  // - main verb is be
  // - modality is used
  // in this case the next verb from the chain takes its tense form

  const skipFirstVerb =
    params.aspect === Aspect.simple &&
    ((!params.negative && !params.interrogative) ||
      params.modalVerb ||
      mainVerbRoot === aspect.auxReplacedBy);

  if (skipFirstVerb) {
    verbChain.shift();
  }

  if (params.passive) {
    const mainVerb = verbChain[verbChain.length - 1].replace('verb', 'be');
    verbChain.splice(verbChain.length - 1, 1, mainVerb, 'verb.v3');
  }

  if (params.modalVerb) {
    verbChain.splice(0, 0, params.modalVerb);
  }

  if (!params.modalVerb) {
    const firstVerbForm = params.tense === Tense.past ? VerbForm.past : VerbForm.present;
    verbChain[0] = `${verbChain[0]}.${firstVerbForm}`;
  }

  if (params.negative) {
    verbChain.splice(1, 0, 'not');
  }
  // console.log('verbChain:', verbChain);

  return verbChain.map((verbExp: string) => {
    if (Object.keys(ModalVerb).indexOf(verbExp) >= 0) {
      return `${verbExp}:aux`;
    }

    const [member, form] = verbExp.split('.') as [string, VerbForm];
    switch (member) {
      case 'be':
      case 'do':
      case 'have':
        return `${renderVerb(`${member}:s`, form, subject)}:aux`;
      case 'not':
        return 'not:not';
      case 'verb':
        return `${renderVerb(params.verbKey, form, subject)}:verb_${form || 'root'}`;
    }
  });
}

function getVerbForm(verbRoot: string, type: string, form: VerbForm, pronoun: Pronoun): string {
  const verbCollection = type === 'i' ? irregularVerbs : verbs;
  const verb = verbCollection[verbRoot];
  if (typeof verb[form] === 'string') {
    return verb[form];
  } else {
    switch (form) {
      case VerbForm.present:
        if (
          pronoun.grammarPerson === GrammarPerson.third &&
          pronoun.grammarNumber === GrammarNumber.singular
        ) {
          return verb.s || `${verbRoot}s`;
        } else {
          return verbRoot;
        }
      case VerbForm.past:
        return verb.ed || `${verbRoot}ed`;
      case VerbForm.v3:
        return verb.ed || `${verbRoot}ed`;
      case VerbForm.ing:
        return `${verbRoot}ing`;
    }
  }
}

export function renderVerb(verbKey: string, form: VerbForm, subject?: Pronoun): string {
  if (typeof form !== 'string') {
    // verb in root (infinitive without "to") form
    return verbKey.split(':')[0];
  }

  const [verbRoot, type] = verbKey.split(':');
  if (type === 's') {
    const verbPersonForm = specialVerbs[verbRoot][form];
    if (typeof verbPersonForm === 'string') {
      return verbPersonForm;
    }
    const verbNumberForm = verbPersonForm[subject.grammarPerson];
    if (typeof verbNumberForm === 'string') {
      return verbNumberForm;
    }
    return verbNumberForm[subject.grammarNumber];
  } else {
    // regular or irregular verb
    return getVerbForm(verbRoot, type, form, subject);
  }
}

function applyContraction(members: string[], contraction: ContractionRule): string[] {
  const newMembers: string[] = [];

  for (let i = 0; i < members.length; ++i) {
    if (
      i < members.length - 1 &&
      contraction.from === `${members[i]} ${members[i + 1]}`.toLowerCase()
    ) {
      newMembers.push(`${contraction.to}:ctr`);
      ++i; // skip the next item
    } else {
      newMembers.push(members[i]);
    }
  }
  return newMembers;
}

function applyContractions(members: string[]): string[] {
  for (const contraction of contractions) {
    members = applyContraction(members, contraction);
  }
  return members;
}

function getObjectText(params: SentenceParams): string {
  const verbRoot = params.verbKey.split(':')[0];
  if (objects[verbRoot]) {
    const objectList = objects[verbRoot][params.passive ? 'passive' : 'active'];
    if (objectList) {
      return objectList[params.objectIndex] || null;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
