import React from 'react';
import { AspectId } from '~/type';

type ACProps = {
  aspectId: AspectId;
  onChange: (aspectId: AspectId) => void;
};

type AspectItem = {
  [key in AspectId]: string;
};

export const Aspects: AspectItem = {
  simple: 'Simple (Indefinite)',
  continuous: 'Continuous (Progressive)',
  perfect: 'Perfect',
  perfect_continuous: 'Perfect Continuous (Progressive)'
};

export const AspectCombo: React.FC<ACProps> = ({ aspectId, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as AspectId);

  return (
    <select id="aspect" onChange={comboChangeHandler} defaultValue={aspectId}>
      {Object.keys(Aspects).map((aspectId: AspectId) => (
        <option key={aspectId} value={aspectId}>
          {Aspects[aspectId]}
        </option>
      ))}
    </select>
  );
};
