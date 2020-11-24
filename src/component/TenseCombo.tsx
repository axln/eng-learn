import React from 'react';
import { capitalize } from '~/lib/Helper';
import { TenseId } from '~/type';
import tenses from '../data/tense.json';

type TCProps = {
  tenseId: TenseId;
  onChange: (tenseId: TenseId) => void;
};

export const TenseCombo: React.FC<TCProps> = ({ tenseId, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as TenseId);

  return (
    <select id="tense" onChange={comboChangeHandler} defaultValue={tenseId}>
      {Object.keys(tenses).map((tenseId) => (
        <option key={tenseId} value={tenseId}>
          {capitalize(tenseId.replace(/_/g, ' '))}
        </option>
      ))}
    </select>
  );
};
