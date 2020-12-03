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

export enum ModalVerb {
  can = 'can',
  could = 'could',
  may = 'may',
  might = 'might',
  will = 'will',
  would = 'would',
  shall = 'shall',
  should = 'should',
  must = 'must',
  ought_to = 'ought to'
}

export type Aspects = {
  [key in Aspect]: {
    auxReplacedBy?: string;
    verbChain: string[];
  };
};

type TenseInfo = {
  firstVerbForm?: string;
  auxReplacedBy?: string;
  verbChain: string[];
};

export type Tenses = {
  [key in Aspect]: {
    [key in Tense]: TenseInfo;
  };
};

export type SentenceParams = {
  tense: Tense;
  aspect: Aspect;
  pronounKey: string;
  verbKey: string;
  modalVerb: ModalVerb | null;
  passive: boolean;
  negative: boolean;
  interrogative: boolean;
  applyContractions: boolean;
  objectIndex: number;
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
  grammarPerson: GrammarPerson;
  grammarNumber: GrammarNumber;
  gender?: GrammarGender; // genders are applicable only to the third person's pronouns
  spelling: { [key in GrammarCase]: string };
};

export type Pronouns = {
  [key: string]: Pronoun;
};

export enum VerbForm {
  present = 'present', // depends on the subject, if it is a third person singular, then return -s form
  s = 's', // third person singular,
  ing = 'ing', // present participle (please note that gerund has the same form, but is used as a noun, not as a verb)
  past = 'past', // past simple (v2)
  v3 = 'v3', // past participle (v3)
  ed = 'ed' // both past simple (v2) and past participle (v3) forms for regular verbs
}

export type SpecialVerbNumberForm = { [key in GrammarNumber]: string } | string;
export type SpecialVerbPersonForm = { [key in GrammarPerson]: SpecialVerbNumberForm } | string;

export type SpecialVerb = {
  [key in VerbForm]?: SpecialVerbPersonForm;
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

export type ContractionRule = {
  from: string;
  to: string;
};

export type VerbObjects = {
  active: string[];
  passive?: string[];
};

export type Objects = {
  [key: string]: VerbObjects;
};
