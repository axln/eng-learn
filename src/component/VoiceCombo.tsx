import React from 'react';
import { Voice } from '~/type';

type ACProps = {
  voice: Voice;
  onChange: (voice: Voice) => void;
};

type VoiceTitles = {
  [key in Voice]?: string;
};

const voiceTitles: VoiceTitles = {
  active: 'Active',
  passive: 'Passive'
};

export const VoiceCombo: React.FC<ACProps> = ({ voice, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as Voice);

  return (
    <select id="voice" onChange={comboChangeHandler} defaultValue={voice}>
      {Object.keys(voiceTitles).map((value) => (
        <option key={value} value={value}>
          {voiceTitles[value as Voice]}
        </option>
      ))}
    </select>
  );
};
