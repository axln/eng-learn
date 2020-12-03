import React from 'react';
import { objects } from '~/lib/Objects';

type ACProps = {
  verbRoot: string;
  passive: boolean;
  objectIndex: number;
  onChange: (objectIndex: number) => void;
};

export const ObjectCombo: React.FC<ACProps> = ({ verbRoot, passive, objectIndex, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(parseInt(e.target.value));

  let objectList = [] as string[];
  if (objects[verbRoot]) {
    objectList = objects[verbRoot][passive ? 'passive' : 'active'] || [];
  }

  return (
    <select id="object_combo" onChange={comboChangeHandler} defaultValue={objectIndex}>
      {objectList.map((value: string, index) => (
        <option key={value} value={index}>
          {value}
        </option>
      ))}
    </select>
  );
};
