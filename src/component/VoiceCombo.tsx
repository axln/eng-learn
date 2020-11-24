import React from 'react';
import { VoiceId } from '~/type';

type ACProps = {
  voiceId: VoiceId;
  onChange: (voiceId: VoiceId) => void;
};

type VoiceItems = {
  [key in VoiceId]: string;
};

export const Voices: VoiceItems = {
  active: 'Active',
  passive: 'Passive'
};

export const VoiceCombo: React.FC<ACProps> = ({ voiceId, onChange }) => {
  const comboChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value as VoiceId);

  return (
    <select id="voice" onChange={comboChangeHandler} defaultValue={voiceId}>
      {Object.keys(Voices).map((aspectId: VoiceId) => (
        <option key={aspectId} value={aspectId}>
          {Voices[aspectId]}
        </option>
      ))}
    </select>
  );
};
