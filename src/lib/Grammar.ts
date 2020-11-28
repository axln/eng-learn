import {
  Aspect,
  ContractionRule,
  GrammarNumber,
  GrammarPerson,
  Pronoun,
  SentenceParams,
  Tense,
  VerbForm,
  Verbs
} from '~/type';
import { specialVerbs } from '~/lib/SpecialVerbs';
import { irregularVerbs } from '~/lib/IrregularVerbs';
import { verbs } from '~/lib/Verbs';
import { contractions } from '~/lib/Contractions';
import { tenses } from '~/lib/Tenses';
import { pronouns } from '~/lib/Pronouns';
import { capitalize, equalArrays, reorderArr } from '~/lib/Helper';

function getVerbForm(
  verbId: string,
  verbCollection: Verbs,
  form: VerbForm,
  pronoun: Pronoun
): string {
  const verb = verbCollection[verbId];
  if (typeof verb[form] === 'string') {
    return verb[form];
  } else {
    switch (form) {
      case VerbForm.present:
        if (
          pronoun.grammarPerson === GrammarPerson.third &&
          pronoun.grammarNumber === GrammarNumber.singular
        ) {
          return verb.s || `${verbId}s`;
        } else {
          return verbId;
        }
      case VerbForm.ed:
      case VerbForm.past:
      case VerbForm.v3:
        return `${verbId}ed`;
      case VerbForm.ing:
        return verbId + form;
    }
  }
}

function renderVerb(verbKey: string, form: VerbForm, subject?: Pronoun): string {
  if (typeof form !== 'string') {
    // verb in infinitive form
    return verbKey.split(':')[0];
  }
  const [verbId, type] = verbKey.split(':');
  switch (type) {
    case 's': {
      const verbPersonForm = specialVerbs[verbId][form];
      if (typeof verbPersonForm === 'string') {
        return verbPersonForm;
      }
      const verbNumberForm = verbPersonForm[subject.grammarPerson];
      if (typeof verbNumberForm === 'string') {
        return verbNumberForm;
      }
      return verbNumberForm[subject.grammarNumber];
    }

    case 'i':
      return getVerbForm(verbId, irregularVerbs, form, subject);

    default:
      return getVerbForm(verbId, verbs, form, subject);
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

export function renderSentence(params: SentenceParams): string[] {
  const tenseInfo = tenses[params.tense][params.aspect];
  const subject = pronouns[params.pronounKey];
  // verb root (an infinitive without to)
  const verbRoot = params.passive ? 'be' : params.verbKey.split(':')[0];
  const [auxRoot, auxForm] = tenseInfo.aux.split('.');

  let skipVerb = false;
  const skipAux =
    params.aspect === Aspect.simple &&
    !params.negative &&
    !params.interrogative &&
    (params.tense === Tense.past || params.tense === Tense.present);

  let members: string[] = [`${subject.spelling.subject}:pronoun`];

  // aux
  if (!skipAux) {
    let auxVerb = auxRoot;
    // in past and present simple tense the be verb plays the role of the aux verb
    if (verbRoot === tenseInfo.auxReplacedBy) {
      auxVerb = verbRoot;
      // must skip the main verb since we already added it
      skipVerb = true;
    }

    members.push(`${renderVerb(auxVerb + ':s', auxForm as VerbForm, subject)}:aux`);
  }

  // not
  if (params.negative) {
    members.push(`not:not`);
  }

  tenseInfo.verbChain.forEach((item) => {
    const [member, form] = item.split('.') as [string, VerbForm];
    switch (member) {
      case 'verb':
        if (!skipVerb) {
          const renderedVerb = renderVerb(
            params.passive ? 'be:s' : params.verbKey,
            skipAux ? (auxForm as VerbForm) : form,
            subject
          );
          if (verbRoot === tenseInfo.auxReplacedBy) {
            members.push(`${renderedVerb}:aux`);
          } else {
            members.push(`${renderedVerb}:verb`);
          }
        }
        // in case of passive voice, the verb is converted to v3 form and "be" used in front of it
        if (params.passive) {
          members.push(`${renderVerb(params.verbKey, VerbForm.v3)}:verb`);
        }
        break;
      case 'be':
      case 'have':
      case 'been':
        members.push(`${member}:verb`);
        break;
      default:
        members.push(`${member}:${member}`);
    }
  });

  members.push(`${params.object}:object`);

  const endChar = params.interrogative ? '?' : '.';
  members.push(`${endChar}:end`);

  if (params.interrogative) {
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

  return members;
}
