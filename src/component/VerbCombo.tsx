import React from 'react';
import { verbs } from '~/lib/Verbs';
import { irregularVerbs } from '~/lib/IrregularVerbs';
import { specialVerbs } from '~/lib/SpecialVerbs';

type ACProps = {
  verbKey: string;
  onChange: (verbKey: string) => void;
};

const verbList = Object.keys(verbs).map((key) => key + ':r');
const irregularVerbList = Object.keys(irregularVerbs).map((key) => key + ':i');
const specialVerbList = Object.keys(specialVerbs).map((key) => key + ':s');

export const allVerbKeys = verbList.concat(irregularVerbList).concat(specialVerbList).sort();

function getTitleByKey(key: string): string {
  const [verb, type] = key.split(':');
  switch (type) {
    case 'i':
      return `${verb} (irr)`;
    case 's':
      return `${verb} (special)`;
    default:
      return verb;
  }
}

export const VerbCombo: React.FC<ACProps> = ({ verbKey, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

  return (
    <select id="verb" onChange={comboChangeHandler} defaultValue={verbKey}>
      {allVerbKeys.map((key: string) => (
        <option key={key} value={key}>
          {getTitleByKey(key)}
        </option>
      ))}
    </select>
  );
};
