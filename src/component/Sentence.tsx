import React from 'react';
import {
  Aspect,
  ContractionRule,
  GrammarNumber,
  GrammarPerson,
  Pronoun,
  SentenceForm,
  SentenceParams,
  Tense,
  VerbForm,
  Verbs,
  Voice
} from '~/type';
import { tenses } from '~/lib/Tenses';
import { verbs } from '~/lib/Verbs';
import { irregularVerbs } from '~/lib/IrregularVerbs';
import { specialVerbs } from '~/lib/SpecialVerbs';
import { pronouns } from '~/lib/Pronouns';
import { contractions } from '~/lib/Contractions';
import { capitalize, equalArrays, reorderArr } from '~/lib/Helper';

type SentenceProps = {
  params: SentenceParams;
};

Object.keys(Tense).forEach((tense) => {
  Object.keys(Aspect).forEach((aspect) => {
    Object.keys(SentenceForm).forEach((form) => {
      const paramVoice: SentenceParams = {
        tense: tense as Tense,
        aspect: aspect as Aspect,
        form: form as SentenceForm,
        applyContractions: false,
        voice: Voice.passive,
        negative: false,
        passive: false,
        pronounKey: 'I',
        verbKey: 'work:r',
        object: 'a book'
      };
      const paramPassive = {
        ...paramVoice,
        voice: Voice.active,
        passive: true
      };

      const sentenceVoice = renderSentence(paramVoice);
      const sentencePassive = renderSentence(paramPassive);

      if (equalArrays(sentenceVoice, sentencePassive)) {
        console.log(`${tense}:${aspect}:${form}: OK`);
      } else {
        console.log(`${tense}:${aspect}:${form}: Error`);
        console.log('sentenceVoice:', sentenceVoice);
        console.log('sentencePassive:', sentencePassive);
      }
    });
  });
});

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

function renderSentence(params: SentenceParams): string[] {
  const tenseInfo = tenses[params.tense][params.aspect];
  const struct = tenseInfo.forms[params.form];
  const sequence = struct[params.voice];
  const subject = pronouns[params.pronounKey];

  // verb infinitive
  const verbInf = params.passive ? 'be' : params.verbKey.split(':')[0];

  let auxPresent = false;
  let skipVerb = false;
  let members = sequence.reduce((members, item) => {
    const [member, form] = item.split('.') as [string, VerbForm];
    switch (member) {
      case 'subject':
        members.push(`${subject.spelling.subject}:pronoun`);
        break;
      case 'aux':
        {
          auxPresent = true;
          let auxVerb = tenseInfo.aux;
          if (verbInf === tenseInfo.aux_replaced_by) {
            auxVerb = verbInf;
            skipVerb = true;
          }
          members.push(`${renderVerb(auxVerb + ':s', form, subject)}:aux`);
        }
        break;
      case 'be':
        if (tenseInfo.aux_replaced_by === 'be') {
          auxPresent = true;
        }
        members.push(`${renderVerb('be:s', form, subject)}:aux`);
        break;
      case 'verb':
        if (!skipVerb) {
          const renderedVerb = renderVerb(params.passive ? 'be:s' : params.verbKey, form, subject);
          if (!auxPresent && verbInf === tenseInfo.aux_replaced_by) {
            members.push(`${renderedVerb}:aux`);
          } else {
            members.push(`${renderedVerb}:verb`);
          }
        }
        if (params.passive) {
          members.push(`${renderVerb(params.verbKey, VerbForm.v3)}:verb`);
        }
        break;
      case 'will':
      case 'would':
        members.push(`${member}:aux`);
        break;
      case 'being':
      case 'been':
        members.push(`${member}:verb`);
        break;
      default:
        members.push(`${member}:${member}`);
    }
    return members;
  }, [] as string[]);

  members.push(`${params.object}:object`);

  if (
    params.form === SentenceForm.interrogative ||
    params.form === SentenceForm.negative_interrogative
  ) {
    members.push(`?:end`);
  } else {
    members.push(`.:end`);
  }

  if (params.applyContractions) {
    if (params.form === SentenceForm.negative_interrogative) {
      // move "not" in front of "subject" to find possible contractions
      const reorderedMembers = reorderArr(members, 2, 1);
      const contractedMembers = applyContractions(reorderedMembers);
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

export const Sentence: React.FC<SentenceProps> = ({ params }) => (
  <div id="sentence" className="sentence">
    {renderSentence(params).map((member) => {
      const [text, type] = member.split(':');
      return (
        <span key={member} className={type}>
          {text}
        </span>
      );
    })}
  </div>
);
