import React from 'react';
import { capitalize } from '~/lib/Helper';
import { Tense } from '~/type';

type TCProps = {
  tense: Tense;
  onChange: (tenseId: Tense) => void;
};

export const TenseCombo: React.FC<TCProps> = ({ tense, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as Tense);

  return (
    <select id="tense" onChange={comboChangeHandler} value={tense}>
      {Object.keys(Tense).map((value) => (
        <option key={value} value={value}>
          {capitalize(value.replace(/_/g, ' '))}
        </option>
      ))}
    </select>
  );
};
