import {
  Aspect,
  ContractionRule,
  GrammarNumber,
  GrammarPerson,
  ModalVerb,
  Pronoun,
  SentenceMode,
  SentenceParams,
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
  let words: string[] = [`${subject.spelling.subject}:pronoun`];
  words = words.concat(renderVerbChain(params));

  const objectText = getObjectText(params);
  if (objectText) {
    words.push(`${getObjectText(params)}:object`);
  }

  words.push(`${params.interrogative ? '?' : '.'}:end`);

  if (params.interrogative) {
    // for interrogative sentences just swap subject with aux
    words = reorderArr(words, 1, 0);
  }

  if (params.applyContractions) {
    if (params.interrogative && params.negative) {
      // move "not" in front of "subject" to find possible contractions
      const reorderedWords = reorderArr(
        words,
        params.mode === SentenceMode.ModalVerb && params.modalVerb === ModalVerb.had_better ? 3 : 2,
        1
      );
      const contractedWords = applyContractions(reorderedWords);

      // have contractions been applied?
      if (!equalArrays(reorderedWords, contractedWords)) {
        words = contractedWords;
      }
    } else {
      words = applyContractions(words);
    }
  }

  if (words.length > 0) {
    words[0] = capitalize(words[0]);
  }

  // merge "can not" into "cannot"
  if (params.negative && params.modalVerb === 'can') {
    for (let i = 1; i < words.length - 1; ++i) {
      if (words[i].split(':')[0] === 'can') {
        words.splice(i, 2, 'cannot:aux:modal');
        break;
      }
    }
  }

  return words;
}

export function renderVerbChain(params: SentenceParams): string[] {
  const aspect = aspects[params.aspect];
  // verbChain will be mutated so we make a copy
  const verbChain = [...aspects[params.aspect].verbChain];

  const mainVerbRoot = params.verbKey.split(':')[0];
  const subject = pronouns[params.pronounKey];
  const affirmative = !params.negative && !params.interrogative;

  // this condition is the most complex part of the English grammar
  // it states that for the indefinite aspect (past or present tense) you can skip DO aux verb
  // in any of the following cases:
  // - affirmative sentence
  // - main verb is BE
  // - modality is used
  // in this case the next verb in the chain takes its tense form
  const skipFirstVerb =
    params.aspect === Aspect.indefinite &&
    (affirmative ||
      params.mode === SentenceMode.ModalVerb ||
      mainVerbRoot === aspect.auxReplacedBy ||
      params.perfect ||
      params.passive);

  if (skipFirstVerb) {
    verbChain.shift();
  }

  if (params.perfect) {
    verbChain[0] = `${verbChain[0]}.v3`;
    verbChain.unshift('have');
  }

  switch (params.mode) {
    case SentenceMode.PastTense:
    case SentenceMode.PresentTense:
      {
        const firstVerbForm =
          params.mode === SentenceMode.PastTense ? VerbForm.past : VerbForm.present;
        verbChain[0] = `${verbChain[0]}.${firstVerbForm}`;
      }
      break;

    case SentenceMode.ModalVerb:
      if (params.modalVerb === ModalVerb.ought_to) {
        // verbChain.splice(0, 0, 'ought:modal', 'to:modal');
        verbChain.unshift('ought:modal', 'to:modal');
      } else if (params.modalVerb === ModalVerb.had_better) {
        // verbChain.splice(0, 0, 'had:modal', 'better:modal');
        verbChain.unshift('had:modal', 'better:modal');
      } else {
        // verbChain.splice(0, 0, `${params.modalVerb}:modal`);
        verbChain.unshift(`${params.modalVerb}:modal`);
      }
      break;
  }

  if (params.passive) {
    const mainVerb = verbChain[verbChain.length - 1].replace('verb', 'be') + ':passive';
    verbChain.splice(verbChain.length - 1, 1, mainVerb, 'verb.v3');
  }

  if (params.negative) {
    if (params.modalVerb === ModalVerb.had_better) {
      verbChain.splice(2, 0, 'not');
    } else {
      verbChain.splice(1, 0, 'not');
    }
  }
  // console.log('verbChain:', verbChain);

  return verbChain.reduce((arr, verbExp) => {
    const [verb, type] = verbExp.split(':');
    const [member, form] = verb.split('.') as [string, VerbForm];
    switch (member) {
      case 'be':
      case 'have':
        arr.push(`${renderVerb(`${member}:s`, form, subject)}:${type || 'aux'}:${form || 'root'}`);
        break;

      case 'do':
        arr.push(`${renderVerb(`${member}:i`, form, subject)}:${type || 'aux'}:${form || 'root'}`);
        break;

      case 'verb':
        arr.push(`${renderVerb(params.verbKey, form, subject)}:verb:${form || 'root'}`);
        break;

      default:
        if (type === 'modal') {
          arr.push(`${member}:modal`);
        } else {
          // for "not" and "to"
          arr.push(`${member}:${member}`);
        }
    }
    return arr;
  }, [] as string[]);
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

function applyContraction(words: string[], contraction: ContractionRule): string[] {
  const newMembers: string[] = [];

  for (let i = 0; i < words.length; ++i) {
    if (i < words.length - 1) {
      const first = words[i].split(':')[0];
      const [second, secondType] = words[i + 1].split(':');

      if (contraction.from === `${first} ${second}`.toLowerCase() && secondType !== 'verb') {
        newMembers.push(`${contraction.to}:aux_ctr:ctr`);
        ++i; // skip the next item
      } else {
        newMembers.push(words[i]);
      }
    } else {
      newMembers.push(words[i]);
    }
  }
  return newMembers;
}

function applyContractions(words: string[]): string[] {
  for (const contraction of contractions) {
    words = applyContraction(words, contraction);
  }
  return words;
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
