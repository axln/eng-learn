import React from 'react';
import { Aspect } from '~/type';

type ACProps = {
  aspect: Aspect;
  onChange: (aspect: Aspect) => void;
};

const aspectTitles: { [key in Aspect]: string } = {
  simple: 'Indefinite (Simple)',
  continuous: 'Continuous (Progressive)',
  perfect: 'Perfect',
  perfect_continuous: 'Perfect Continuous (Progressive)'
};

export const AspectCombo: React.FC<ACProps> = ({ aspect, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as Aspect);

  return (
    <select id="aspect" onChange={comboChangeHandler} value={aspect}>
      {Object.keys(Aspect).map((value: string) => (
        <option key={value} value={value}>
          {aspectTitles[value as Aspect]}
        </option>
      ))}
    </select>
  );
};
