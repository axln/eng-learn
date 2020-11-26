import { GrammarGender, GrammarNumber, GrammarPerson, Pronouns } from '~/type';

export const pronouns: Pronouns = {
  I: {
    person: 1,
    grammarPerson: GrammarPerson.first,
    grammarNumber: GrammarNumber.singular,
    gender: GrammarGender.neuter,
    spelling: {
      subject: 'I',
      object: 'me',
      possessive_adjective: 'my',
      possessive_pronoun: 'mine',
      reflexive: 'myself'
    }
  },
  we: {
    person: 1,
    grammarPerson: GrammarPerson.first,
    grammarNumber: GrammarNumber.plural,
    spelling: {
      subject: 'we',
      object: 'us',
      possessive_adjective: 'our',
      possessive_pronoun: 'ours',
      reflexive: 'ourselves'
    }
  },
  you_singular: {
    person: 2,
    grammarPerson: GrammarPerson.second,
    grammarNumber: GrammarNumber.singular,
    spelling: {
      subject: 'you',
      object: 'you',
      possessive_adjective: 'your',
      possessive_pronoun: 'yours',
      reflexive: 'yourself'
    }
  },
  you_plural: {
    person: 2,
    grammarPerson: GrammarPerson.second,
    grammarNumber: GrammarNumber.plural,
    spelling: {
      subject: 'you',
      object: 'you',
      possessive_adjective: 'your',
      possessive_pronoun: 'yours',
      reflexive: 'yourselves'
    }
  },
  he: {
    person: 3,
    grammarPerson: GrammarPerson.third,
    grammarNumber: GrammarNumber.singular,
    gender: GrammarGender.masculine,
    spelling: {
      subject: 'he',
      object: 'him',
      possessive_adjective: 'his',
      possessive_pronoun: 'his',
      reflexive: 'himself'
    }
  },
  she: {
    person: 3,
    grammarPerson: GrammarPerson.third,
    grammarNumber: GrammarNumber.singular,
    gender: GrammarGender.feminine,
    spelling: {
      subject: 'she',
      object: 'her',
      possessive_adjective: 'her',
      possessive_pronoun: 'hers',
      reflexive: 'herself'
    }
  },
  it: {
    person: 3,
    grammarPerson: GrammarPerson.third,
    grammarNumber: GrammarNumber.singular,
    gender: GrammarGender.neuter,
    spelling: {
      subject: 'it',
      object: 'it',
      possessive_adjective: 'its',
      possessive_pronoun: '', // never used
      reflexive: 'itself'
    }
  },
  they: {
    person: 3,
    grammarPerson: GrammarPerson.third,
    grammarNumber: GrammarNumber.plural,
    gender: GrammarGender.epicene,
    spelling: {
      subject: 'they',
      object: 'them',
      possessive_adjective: 'their',
      possessive_pronoun: 'theirs',
      reflexive: 'themselves'
    }
  }
};
