import React from 'react';
import './Sentence.scss';
import './Word.scss';

type WordProps = { word: string };

export const Word: React.FC<WordProps> = ({ word }) => {
  const [text, type, form] = word.split(':');

  return (
    <div key={word} className={`word ${type}`}>
      {type ? <span className="type">{type === 'aux_ctr' ? 'aux' : type}</span> : null}
      {form ? <span className="form">{form === 'present' ? 'prst' : form}</span> : null}
      <span>{text}</span>
    </div>
  );
};
