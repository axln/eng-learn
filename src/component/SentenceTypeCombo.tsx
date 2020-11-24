import React from 'react';
import { SentenceTypeId } from '~/type';

type ACProps = {
  sentenceTypeId: SentenceTypeId;
  onChange: (sentenceTypeId: SentenceTypeId) => void;
};

type SentenceTypeItems = {
  [key in SentenceTypeId]: string;
};

export const SentenceTypes: SentenceTypeItems = {
  affirmative: 'Affirmative',
  interrogative: 'Interrogative',
  negative: 'Negative',
  negative_interrogative: 'Negative Interrogative'
};

export const SentenceTypeCombo: React.FC<ACProps> = ({ sentenceTypeId, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as SentenceTypeId);

  return (
    <select id="type" onChange={comboChangeHandler} defaultValue={sentenceTypeId}>
      {Object.keys(SentenceTypes).map((sentenceTypeId: SentenceTypeId) => (
        <option key={sentenceTypeId} value={sentenceTypeId}>
          {SentenceTypes[sentenceTypeId]}
        </option>
      ))}
    </select>
  );
};
