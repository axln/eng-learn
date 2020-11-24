import React, { useEffect, useState } from 'react';
import { TenseCombo } from '~/component/TenseCombo';
import { AspectCombo } from '~/component/AspectCombo';
import { VoiceCombo } from '~/component/VoiceCombo';
import { SentenceTypeCombo } from '~/component/SentenceTypeCombo';
import { PronounCombo } from '~/component/PronounCombo';
import { VerbCombo } from '~/component/VerbCombo';
import { AspectId, TenseId, VoiceId, SentenceTypeId, PronounId, VerbId } from '~/type';

type AppState = {
  tenseId: TenseId;
  aspectId: AspectId;
  voiceId: VoiceId;
  sentenceTypeId: SentenceTypeId;
  pronounId: PronounId;
  verbId: VerbId;
  object: string;
  allowContractions: boolean;
};

const defaultAppState: AppState = {
  tenseId: 'present',
  aspectId: 'simple',
  voiceId: 'active',
  sentenceTypeId: 'affirmative',
  pronounId: 'I',
  verbId: 'be',
  object: 'a teacher',
  allowContractions: false
};

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>(defaultAppState);

  const tenseChangeHandler = (tenseId: TenseId) => {
    setState({
      ...state,
      tenseId
    });
  };

  const aspectChangeHandler = (aspectId: AspectId) => {
    setState({
      ...state,
      aspectId
    });
  };

  const voiceChangeHandler = (voiceId: VoiceId) => {
    setState({
      ...state,
      voiceId
    });
  };

  const sentenceTypeChangeHandler = (sentenceTypeId: SentenceTypeId) => {
    setState({
      ...state,
      sentenceTypeId
    });
  };

  const pronounChangeHandler = (pronounId: PronounId) => {
    setState({
      ...state,
      pronounId
    });
  };

  const verbChangeHandler = (verbId: VerbId) => {
    setState({
      ...state,
      verbId
    });
  };

  const objectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      object: e.target.value
    });
  };

  const contractChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      allowContractions: e.target.checked
    });
  };

  useEffect(() => {
    console.log('state:', state);
  });

  return (
    <>
      <h1>Sentence Constructor</h1>
      <div className="repo">
        <a target="_blank" rel="noreferrer" href="https://github.com/axln/sentence-constructor">
          GitHub Project
        </a>
      </div>
      <div className="desc">
        <p>This tiny app replaces huge tables of English tenses.</p>
        <p>
          It allows you to choose any tense and aspect (simple, continuous, etc) with the voice
          (active/passive) and builds a sentence of any types (affirmative, negative, etc).
        </p>
      </div>
      <div className="controls">
        Tense: <TenseCombo tenseId={state.tenseId} onChange={tenseChangeHandler} />{' '}
        <AspectCombo aspectId={state.aspectId} onChange={aspectChangeHandler} />{' '}
        <VoiceCombo voiceId={state.voiceId} onChange={voiceChangeHandler} /> Sentence type:{' '}
        <SentenceTypeCombo
          sentenceTypeId={state.sentenceTypeId}
          onChange={sentenceTypeChangeHandler}
        />
      </div>

      <div className="controls">
        Pronoun: <PronounCombo pronounId={state.pronounId} onChange={pronounChangeHandler} /> Verb:{' '}
        <VerbCombo verbId={state.verbId} onChange={verbChangeHandler} /> Object:{' '}
        <input id="object" type="text" value={state.object} onChange={objectChangeHandler} />
      </div>

      <div className="controls">
        <input
          type="checkbox"
          id="contract"
          checked={state.allowContractions}
          onChange={contractChangeHandler}
        />{' '}
        <label htmlFor="contract">Allow contractions</label>
      </div>
    </>
  );
};
