import React from 'react';
import { PronounId } from '~/type';
import { pronouns } from '~/lib/Pronouns';

type ACProps = {
  pronounKey: string;
  onChange: (pronounKey: string) => void;
};

export const PronounCombo: React.FC<ACProps> = ({ pronounKey, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as PronounId);

  return (
    <select id="pronoun" onChange={comboChangeHandler} defaultValue={pronounKey}>
      {Object.keys(pronouns).map((value: string) => (
        <option key={value} value={value}>
          {value.replace('_', ' ')}
        </option>
      ))}
    </select>
  );
};
