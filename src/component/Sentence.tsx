import React from 'react';
import { SentenceParams } from '~/type';
import { renderSentence, renderSentence2 } from '~/lib/Grammar';

type SentenceProps = { params: SentenceParams };

export const Sentence: React.FC<SentenceProps> = ({ params }) => (
  <div id="sentence" className="sentence">
    {renderSentence2(params).map((member) => {
      const [text, type] = member.split(':');
      return (
        <span key={member} className={type}>
          {text}
        </span>
      );
    })}
  </div>
);
