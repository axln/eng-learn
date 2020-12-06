import React from 'react';
import { ModalVerb } from '~/type';

type ACProps = {
  modalVerb: ModalVerb;
  onChange: (modalVerb: ModalVerb) => void;
};

export const ModalCombo: React.FC<ACProps> = ({ modalVerb, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'null') {
      onChange(null);
    } else {
      onChange(e.target.value as ModalVerb);
    }
  };

  return (
    <select id="modal" onChange={comboChangeHandler} defaultValue={modalVerb || 'null'}>
      <option key={null} value={'null'}>
        [none]
      </option>
      {Object.keys(ModalVerb).map((value: string) => (
        <option key={value} value={value}>
          {ModalVerb[value as keyof typeof ModalVerb].replace('_', ' ')}
        </option>
      ))}
    </select>
  );
};
