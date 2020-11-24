import React from 'react';
import { VerbId } from '~/type';
import verbs from '~/data/verb.json';

type ACProps = {
  verbId: VerbId;
  onChange: (verbId: VerbId) => void;
};

export const VerbCombo: React.FC<ACProps> = ({ verbId, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as VerbId);

  return (
    <select id="verb" onChange={comboChangeHandler} defaultValue={verbId}>
      {Object.keys(verbs).map((verbId: VerbId) => (
        <option key={verbId} value={verbId}>
          {verbId}
        </option>
      ))}
    </select>
  );
};
