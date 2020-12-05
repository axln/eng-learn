import { GrammarGender, GrammarNumber, GrammarPerson, Pronouns } from '~/type';

export const pronouns: Pronouns = {
  I: {
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
    grammarPerson: GrammarPerson.second,
    grammarNumber: GrammarNumber.singular,
    spelling: {
      subject: 'you',
      object: 'you',
      possessive_adjective: 'your',
      possessive_pronoun: 'yours',
      reflexive: 'yourself' // this case is the only diff between you singular and you plural
    }
  },
  you_plural: {
    grammarPerson: GrammarPerson.second,
    grammarNumber: GrammarNumber.plural,
    spelling: {
      subject: 'you',
      object: 'you',
      possessive_adjective: 'your',
      possessive_pronoun: 'yours',
      reflexive: 'yourselves' // this case is the only diff between you singular and you plural
    }
  },
  he: {
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
