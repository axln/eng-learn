import React from 'react';
import { capitalize } from '~/lib/Helper';
import { SentenceMode } from '~/type';

type TCProps = {
  tense: SentenceMode;
  onChange: (tenseId: SentenceMode) => void;
};

export const TenseCombo: React.FC<TCProps> = ({ tense, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as SentenceMode);

  return (
    <select id="tense" onChange={comboChangeHandler} value={tense}>
      {Object.keys(SentenceMode).map((value) => (
        <option key={value} value={value}>
          {capitalize(value.replace(/_/g, ' '))}
        </option>
      ))}
    </select>
  );
};
