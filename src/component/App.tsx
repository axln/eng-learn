import React, { useEffect, useState } from 'react';
import { Aspect, SentenceParams, Tense, ModalVerb } from '~/type';
import { TenseCombo } from '~/component/TenseCombo';
import { AspectCombo } from '~/component/AspectCombo';
import { PronounCombo } from '~/component/PronounCombo';
import { VerbCombo } from '~/component/VerbCombo';
import { Sentence } from '~/component/Sentence';
import { ObjectCombo } from '~/component/ObjectCombo';
import { renderVerbChain } from '~/lib/Grammar';
import { ModalCombo } from '~/component/ModalCombo';

const defaultAppState: SentenceParams = {
  tense: Tense.present,
  aspect: Aspect.simple,
  pronounKey: 'I',
  verbKey: 'ask:r',
  passive: false,
  objectIndex: 0,
  negative: false,
  interrogative: false,
  applyContractions: false,
  modalVerb: null
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

  const modalVerbChangeHandler = (modalVerb: ModalVerb) => {
    setState({
      ...state,
      modalVerb
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
      verbKey,
      objectIndex: 0
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
      passive: e.target.checked,
      objectIndex: 0
    });
  };

  const negativeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      negative: e.target.checked
    });
  };

  const interrogativeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      interrogative: e.target.checked
    });
  };

  const objectIndexChangeHandler = (objectIndex: number) => {
    console.log('objectIndexChangeHandler:', objectIndex);
    setState({
      ...state,
      objectIndex
    });
  };

  useEffect(() => {
    //console.log(renderVerbChain(state));
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
        Tense: <TenseCombo tense={state.tense} onChange={tenseChangeHandler} />{' '}
        <AspectCombo aspect={state.aspect} onChange={aspectChangeHandler} />{' '}
      </div>

      <div className="controls">
        Pronoun: <PronounCombo pronounKey={state.pronounKey} onChange={pronounChangeHandler} />{' '}
        Modal: <ModalCombo modalVerb={state.modalVerb} onChange={modalVerbChangeHandler} /> Verb:{' '}
        <VerbCombo verbKey={state.verbKey} onChange={verbChangeHandler} /> Object:{' '}
        <ObjectCombo
          verbRoot={state.verbKey.split(':')[0]}
          passive={state.passive}
          objectIndex={state.objectIndex}
          onChange={objectIndexChangeHandler}
        />
      </div>

      <div className="controls">
        <input
          type="checkbox"
          id="passive"
          checked={state.passive}
          onChange={passiveChangeHandler}
        />{' '}
        <label htmlFor="passive">Passive Voice</label>
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
          id="interrogative"
          checked={state.interrogative}
          onChange={interrogativeChangeHandler}
        />{' '}
        <label htmlFor="interrogative">Interrogative</label>
      </div>

      <div className="controls">
        <input
          type="checkbox"
          id="contract"
          checked={state.applyContractions}
          onChange={contractChangeHandler}
        />{' '}
        <label htmlFor="contract">Contractions</label>
      </div>

      <Sentence params={state} />
    </>
  );
};
