import React, { useState } from 'react';
import { Aspect, SentenceForm, SentenceParams, Tense } from '~/type';
import { TenseCombo } from '~/component/TenseCombo';
import { AspectCombo } from '~/component/AspectCombo';
import { SentenceTypeCombo } from '~/component/SentenceTypeCombo';
import { PronounCombo } from '~/component/PronounCombo';
import { VerbCombo } from '~/component/VerbCombo';
import { Sentence } from '~/component/Sentence';

const defaultAppState: SentenceParams = {
  tense: Tense.present,
  aspect: Aspect.simple,
  form: SentenceForm.affirmative,
  pronounKey: 'I',
  verbKey: 'lead:i',
  object: 'a project',
  passive: false,
  negative: false,
  applyContractions: false
};

export const App: React.FC = () => {
  const [state, setState] = useState<SentenceParams>(defaultAppState);

  const tenseChangeHandler = (tense: Tense) => {
    setState({
      ...state,
      tense
    });
  };

  const aspectChangeHandler = (aspect: Aspect) => {
    setState({
      ...state,
      aspect
    });
  };

  const sentenceTypeChangeHandler = (form: SentenceForm) => {
    setState({
      ...state,
      form
    });
  };

  const pronounChangeHandler = (pronounKey: string) => {
    setState({
      ...state,
      pronounKey
    });
  };

  const verbChangeHandler = (verbKey: string) => {
    setState({
      ...state,
      verbKey
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
      applyContractions: e.target.checked
    });
  };

  const passiveChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      passive: e.target.checked
    });
  };

  const negativeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      negative: e.target.checked
    });
  };

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
        Tense: <TenseCombo tense={state.tense} onChange={tenseChangeHandler} />{' '}
        <AspectCombo aspect={state.aspect} onChange={aspectChangeHandler} />{' '}
        <SentenceTypeCombo form={state.form} onChange={sentenceTypeChangeHandler} />
      </div>

      <div className="controls">
        Pronoun: <PronounCombo pronounKey={state.pronounKey} onChange={pronounChangeHandler} />{' '}
        Verb: <VerbCombo verbKey={state.verbKey} onChange={verbChangeHandler} /> Object:{' '}
        <input id="object" type="text" value={state.object} onChange={objectChangeHandler} />
      </div>

      <div className="controls">
        <input
          type="checkbox"
          id="passive"
          checked={state.passive}
          onChange={passiveChangeHandler}
        />{' '}
        <label htmlFor="passive">Passive</label>
      </div>

      <div className="controls">
        <input
          type="checkbox"
          id="negative"
          checked={state.negative}
          onChange={negativeChangeHandler}
        />{' '}
        <label htmlFor="negative">Negative</label>
      </div>

      <div className="controls">
        <input
          type="checkbox"
          id="contract"
          checked={state.applyContractions}
          onChange={contractChangeHandler}
        />{' '}
        <label htmlFor="contract">Apply contractions</label>
      </div>

      <Sentence params={state} />
    </>
  );
};
