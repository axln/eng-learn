import tenses from '~/data/tense.json';
import pronouns from '~/data/pronoun.json';
import verbs from '~/data/verb.json';

type PronounCollection = typeof pronouns;
type VerbCollection = typeof verbs;
type TenseCollectionType = typeof tenses;

export type TenseId = keyof TenseCollectionType;
export type AspectId = 'simple' | 'continuous' | 'perfect' | 'perfect_continuous';
export type VoiceId = 'active' | 'passive';
export type SentenceTypeId =
  | 'affirmative'
  | 'interrogative'
  | 'negative'
  | 'negative_interrogative';

export type PronounId = keyof PronounCollection;
export type VerbId = keyof VerbCollection;
