import React from 'react';
import { SentenceParams } from '~/type';
import { renderSentence } from '~/lib/Grammar';
import { Word } from '~/component/Word';
import './Sentence.scss';

type SentenceProps = { params: SentenceParams };

export const Sentence: React.FC<SentenceProps> = ({ params }) => (
  <div id="sentence" className="sentence">
    {renderSentence(params).map((word) => (
      <Word key={word} word={word} />
    ))}
  </div>
);
