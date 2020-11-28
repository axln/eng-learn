import React from 'react';
import { SentenceForm } from '~/type';

type ACProps = {
  form: SentenceForm;
  onChange: (form: SentenceForm) => void;
};

export const formTitles: {
  [key in SentenceForm]: string;
} = {
  affirmative: 'Affirmative',
  negative: 'Negative',
  interrogative: 'Interrogative',
  negative_interrogative: 'Negative Interrogative'
};

export const SentenceTypeCombo: React.FC<ACProps> = ({ form, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as SentenceForm);

  return (
    <select id="type" onChange={comboChangeHandler} defaultValue={form}>
      {Object.keys(formTitles).map((value) => (
        <option key={value} value={value}>
          {formTitles[value as SentenceForm]}
        </option>
      ))}
    </select>
  );
};
