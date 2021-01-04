import React, { useEffect, useState } from 'react';
import { Aspect, ModalVerb, SentenceMode, SentenceParams } from '~/type';
import { PronounCombo } from '~/component/PronounCombo';
import { VerbCombo } from '~/component/VerbCombo';
import { Sentence } from '~/component/Sentence';
import { ObjectCombo } from '~/component/ObjectCombo';
import { ModalCombo } from '~/component/ModalCombo';

type AppState = {
  params: SentenceParams;
  sentences: SentenceParams[];
};

const defaultAppState: AppState = {
  params: {
    pronounKey: 'I',
    verbKey: 'ask:r',
    mode: SentenceMode.PresentTense,
    modalVerb: ModalVerb.could,
    aspect: Aspect.simple,
    passive: false,
    negative: false,
    interrogative: false,
    applyContractions: false,
    objectIndex: 0
  },
  sentences: []
};

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>(defaultAppState);
  const { params } = state;

  const aspectRadioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      params: {
        ...params,
        aspect: e.target.value as Aspect
      }
    });
  };

  const modalVerbChangeHandler = (modalVerb: ModalVerb) => {
    setState({
      ...state,
      params: {
        ...params,
        modalVerb
      }
    });
  };

  const pronounChangeHandler = (pronounKey: string) => {
    setState({
      ...state,
      params: {
        ...params,
        pronounKey
      }
    });
  };

  const verbChangeHandler = (verbKey: string) => {
    setState({
      ...state,
      params: {
        ...params,
        verbKey,
        objectIndex: 0
      }
    });
  };

  const contractChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      params: {
        ...params,
        applyContractions: e.target.checked
      }
    });
  };

  const passiveChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      params: {
        ...params,
        passive: e.target.checked,
        objectIndex: 0
      }
    });
  };

  const negativeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      params: {
        ...params,
        negative: e.target.checked
      }
    });
  };

  const interrogativeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      params: {
        ...params,
        interrogative: e.target.checked
      }
    });
  };

  const tenseChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      params: {
        ...params,
        mode: e.target.value as SentenceMode
      }
    });
  };

  const objectIndexChangeHandler = (objectIndex: number) => {
    console.log('objectIndexChangeHandler:', objectIndex);
    setState({
      ...state,
      params: {
        ...params,
        objectIndex
      }
    });
  };

  const saveHandler = () => {
    setState({
      ...state,
      sentences: [...state.sentences, params]
    });
  };

  const resetHandler = () => {
    setState({
      ...state,
      sentences: []
    });
  };

  useEffect(() => {
    // console.log(renderVerbChain(state));
  });

  return (
    <>
      <h1>Sentence Constructor</h1>
      <div className="repo">
        <a target="_blank" rel="noreferrer" href="https://github.com/axln/eng-learn">
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
        Pronoun: <PronounCombo pronounKey={params.pronounKey} onChange={pronounChangeHandler} />{' '}
      </div>
      <div className="controls">
        Verb: <VerbCombo verbKey={params.verbKey} onChange={verbChangeHandler} /> Object:{' '}
        <ObjectCombo
          verbRoot={params.verbKey.split(':')[0]}
          passive={params.passive}
          objectIndex={params.objectIndex}
          onChange={objectIndexChangeHandler}
        />
      </div>

      <div className="controls">
        Sentence Mode: <br />
        <input
          id="past_tense_radio"
          type="radio"
          name="tense"
          value={SentenceMode.PastTense}
          onChange={tenseChangeHandler}
          checked={params.mode === SentenceMode.PastTense}
        />
        <label htmlFor="past_tense_radio">{' Past Tense'}</label> <br />
        <input
          id="present_tense_radio"
          type="radio"
          name="tense"
          value={SentenceMode.PresentTense}
          onChange={tenseChangeHandler}
          checked={params.mode === SentenceMode.PresentTense}
        />
        <label htmlFor="present_tense_radio">{' Present Tense'}</label> <br />
        <input
          id="modal_radio"
          type="radio"
          name="tense"
          value={SentenceMode.Modal}
          onChange={tenseChangeHandler}
          checked={params.mode === SentenceMode.Modal}
        />
        <label htmlFor="modal_radio">{' Modal: '}</label>
        <ModalCombo
          enabled={params.mode === SentenceMode.Modal}
          modalVerb={params.modalVerb}
          onChange={modalVerbChangeHandler}
        />
      </div>

      <div className="controls">
        {'Verb Aspect: '}
        <br />
        <input
          id="simple_aspect_radio"
          type="radio"
          name="aspect"
          value={Aspect.simple}
          onChange={aspectRadioChangeHandler}
          checked={params.aspect === Aspect.simple}
        />
        <label htmlFor="simple_aspect_radio">{' Simple (Indefinite)'}</label>
        <br />
        <input
          id="continuous_aspect_radio"
          type="radio"
          name="aspect"
          value={Aspect.continuous}
          onChange={aspectRadioChangeHandler}
          checked={params.aspect === Aspect.continuous}
        />
        <label htmlFor="continuous_aspect_radio">{' Continuous (Progressive)'}</label>
        <br />
        <input
          id="perfect_aspect_radio"
          type="radio"
          name="aspect"
          value={Aspect.perfect}
          onChange={aspectRadioChangeHandler}
          checked={params.aspect === Aspect.perfect}
        />
        <label htmlFor="perfect_aspect_radio">{' Perfect Simple'}</label>
        <br />
        <input
          id="perfect_continuous_aspect_radio"
          type="radio"
          name="aspect"
          value={Aspect.perfect_continuous}
          onChange={aspectRadioChangeHandler}
          checked={params.aspect === Aspect.perfect_continuous}
        />
        <label htmlFor="perfect_continuous_aspect_radio">
          {' Perfect Continuous (Progressive)'}
        </label>
      </div>

      <div className="controls">
        {'Options: '}
        <br />
        <input
          type="checkbox"
          id="passive"
          checked={params.passive}
          onChange={passiveChangeHandler}
        />{' '}
        <label htmlFor="passive">Passive Voice</label> <br />
        <input
          type="checkbox"
          id="negative"
          checked={params.negative}
          onChange={negativeChangeHandler}
        />{' '}
        <label htmlFor="negative">Negative</label> <br />
        <input
          type="checkbox"
          id="interrogative"
          checked={params.interrogative}
          onChange={interrogativeChangeHandler}
        />{' '}
        <label htmlFor="interrogative">Interrogative (Question)</label>
        <br />
        <input
          type="checkbox"
          id="contract"
          checked={params.applyContractions}
          onChange={contractChangeHandler}
        />{' '}
        <label htmlFor="contract">Apply Contractions</label>
      </div>

      <div className="controls">
        <button onClick={saveHandler}>Save</button> <button onClick={resetHandler}>Rest</button>
      </div>

      <Sentence params={params} />

      {state.sentences.map((params, index) => {
        return <Sentence key={index} params={params} />;
      })}
    </>
  );
};
