import React from 'react';
import { ModalVerb } from '~/type';

type ACProps = {
  modalVerb: ModalVerb;
  onChange: (modalVerb: ModalVerb) => void;
  enabled: boolean;
};

export const ModalCombo: React.FC<ACProps> = ({ modalVerb, onChange, enabled }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as ModalVerb);
  };

  return (
    <select
      disabled={!enabled}
      id="modal"
      onChange={comboChangeHandler}
      defaultValue={modalVerb || 'null'}>
      {Object.keys(ModalVerb).map((value: string) => (
        <option key={value} value={value}>
          {ModalVerb[value as keyof typeof ModalVerb].replace('_', ' ')}
        </option>
      ))}
    </select>
  );
};
