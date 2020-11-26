import pronouns from '~/data/pronoun.json';
import verbs from '~/data/verb.json';

export enum Tense {
  past = 'past',
  present = 'present',
  future = 'future',
  future_in_past = 'future_in_past'
}

export enum Aspect {
  simple = 'simple',
  continuous = 'continuous',
  perfect = 'perfect',
  perfect_continuous = 'perfect_continuous'
}

export enum Voice {
  active = 'active',
  active_contracted = 'active_contracted',
  passive = 'passive',
  passive_contracted = 'passive_contracted'
}

export enum SentenceForm {
  affirmative = 'affirmative',
  negative = 'negative',
  interrogative = 'interrogative',
  negative_interrogative = 'negative_interrogative'
}

export type SentenceSequence = string[];

type SentenceStruct = { [key in Voice]?: SentenceSequence } & { end: string };

type TenseInfo = {
  aux: string;
  aux_replace?: string;
  forms: {
    [key in SentenceForm]: SentenceStruct;
  };
};

export type TenseCollection = {
  [key in Tense]: {
    [key in Aspect]: TenseInfo;
  };
};

type PronounCollection = typeof pronouns;
type VerbCollection = typeof verbs;

export type PronounId = keyof PronounCollection;
export type VerbId = keyof VerbCollection;

export type SentenceParams = {
  tense: Tense;
  aspect: Aspect;
  voice: Voice;
  form: SentenceForm;
  pronounKey: string;
  verbKey: string;
  object: string;
  allowContractions: boolean;
};

export enum GrammarNumber {
  singular = 'singular',
  plural = 'plural'
}

export enum GrammarGender {
  masculine = 'masculine',
  feminine = 'feminine',
  neuter = 'neuter',
  epicene = 'epicene'
}

export enum GrammarCase {
  subject = 'subject',
  object = 'object',
  possessive_adjective = 'possessive_adjective',
  possessive_pronoun = 'possessive_pronoun',
  reflexive = 'reflexive'
}

export enum GrammarPerson {
  first = 'first',
  second = 'second',
  third = 'third'
}

export type Pronoun = {
  person: number;
  grammarPerson: GrammarPerson;
  grammarNumber: GrammarNumber;
  gender?: GrammarGender; // genders are applicable only to the third person's pronouns
  spelling: { [key in GrammarCase]: string };
};

export type Pronouns = {
  [key: string]: Pronoun;
};

export enum VerbForm {
  present = 'present', // infinitive
  s = 's', // third person singular,
  ing = 'ing', // present participle (please note that gerund has the same form, but is used as a noun, not as a verb)
  past = 'past', // past simple (v2)
  v3 = 'v3', // past participle (v3)
  ed = 'ed' // both past simple (v2) and past participle (v3) forms for regular verbs
}

export type AuxVerbTenseForm = { [key in GrammarNumber]: string } | string;
export type SpecialVerbTenseForm = { [key in GrammarNumber]: string } | string;
export type AuxVerb = {
  [key in Tense]?: AuxVerbTenseForm[] | string;
};
export type SpecialVerb = {
  [key in VerbForm]?: { [key in GrammarPerson]: SpecialVerbTenseForm } | string;
};
export type AuxVerbs = {
  [key: string]: AuxVerb;
};
export type SpecialVerbs = {
  [key: string]: SpecialVerb;
};

export type Verb = {
  [key in VerbForm]?: string;
};

export type Verbs = {
  [key: string]: Verb;
};
