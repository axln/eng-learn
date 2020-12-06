import React from 'react';
import { pronouns } from '~/lib/Pronouns';

type ACProps = {
  pronounKey: string;
  onChange: (pronounKey: string) => void;
};

export const PronounCombo: React.FC<ACProps> = ({ pronounKey, onChange }) => {
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <>
      {Object.keys(pronouns).map((value: string) => {
        return (
          <span key={`${value}_span`}>
            <input
              type="radio"
              key={`${value}_input`}
              id={`${value}_radio`}
              name="pronoun_radio"
              value={value}
              checked={pronounKey === value}
              onChange={radioChangeHandler}
            />
            <label key={`${value}_label`} htmlFor={`${value}_radio`}>
              {' '}
              {value.replace('_', ' ')}
            </label>
          </span>
        );
      })}
      <br />
    </>
  );
};
