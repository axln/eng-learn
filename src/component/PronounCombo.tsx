import React from 'react';
import { PronounId } from '~/type';
import pronouns from '~/data/pronoun.json';

type ACProps = {
  pronounId: PronounId;
  onChange: (pronounId: PronounId) => void;
};

export const PronounCombo: React.FC<ACProps> = ({ pronounId, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as PronounId);

  return (
    <select id="pronoun" onChange={comboChangeHandler} defaultValue={pronounId}>
      {Object.keys(pronouns).map((pronounId: PronounId) => (
        <option key={pronounId} value={pronounId}>
          {pronounId.replace('_', ' ')}
        </option>
      ))}
    </select>
  );
};
