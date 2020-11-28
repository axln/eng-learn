import React from 'react';
import {
  ContractionRule,
  GrammarNumber,
  GrammarPerson,
  Pronoun,
  SentenceForm,
  SentenceParams,
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
          return verb.s || verbId + 's';
        } else {
          return verbId;
        }
      default:
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
  const verbInf = params.verbKey.split(':')[0]; // verb infinitive

  let auxPresent = false;
  let skipVerb = false;

  let members = sequence
    .map((item: string) => {
      const [member, form] = item.split('.') as [string, VerbForm];
      switch (member) {
        case 'subject':
          return `${subject.spelling.subject}:pronoun`;

        case 'aux': {
          auxPresent = true;
          let auxVerb = tenseInfo.aux;
          if (verbInf === tenseInfo.aux_replace) {
            auxVerb = tenseInfo.aux_replace;
            skipVerb = true;
          }
          return `${renderVerb(auxVerb + ':s', form, subject)}:aux`;
        }
        case 'be':
          if (tenseInfo.aux_replace === 'be') {
            auxPresent = true;
          }
          return `${renderVerb('be:s', form, subject)}:verb`;
        case 'verb':
          if (skipVerb) {
            return null;
          } else {
            const renderedVerb = renderVerb(params.verbKey, form, subject);
            if (verbInf === tenseInfo.aux_replace && !auxPresent) {
              return `${renderedVerb}:aux`;
            } else {
              return `${renderedVerb}:verb`;
            }
          }
        case 'will':
        case 'would':
          return `${member}:aux`;
        case 'being':
        case 'been':
          return `${member}:verb`;
        default:
          return `${member}:${member}`;
      }
    })
    .filter((member) => member !== null);

  members.push(`${params.object}:object`);
  members.push(`${struct.end}:end`);

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
