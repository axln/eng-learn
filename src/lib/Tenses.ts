import { Tenses } from '~/type';

export const tenses: Tenses = {
  past: {
    simple: {
      aux: 'do.past',
      auxReplacedBy: 'be',
      verbChain: ['verb']
    },
    continuous: {
      aux: 'be.past',
      verbChain: ['verb.ing']
    },
    perfect: {
      aux: 'have.past',
      verbChain: ['verb.v3']
    },
    perfect_continuous: {
      aux: 'have.past',
      verbChain: ['be.v3', 'verb.ing']
    }
  },
  present: {
    simple: {
      aux: 'do.present',
      auxReplacedBy: 'be',
      verbChain: ['verb']
    },
    continuous: {
      aux: 'be.present',
      verbChain: ['verb.ing']
    },
    perfect: {
      aux: 'have.present',
      verbChain: ['verb.v3']
    },
    perfect_continuous: {
      aux: 'have.present',
      verbChain: ['be.v3', 'verb.ing']
    }
  },
  future: {
    simple: {
      aux: 'will',
      verbChain: ['verb']
    },
    continuous: {
      aux: 'will',
      verbChain: ['be', 'verb.ing']
    },
    perfect: {
      aux: 'will',
      verbChain: ['have', 'verb.v3']
    },
    perfect_continuous: {
      aux: 'will',
      verbChain: ['have', 'be.v3', 'verb.ing']
    }
  },
  future_in_past: {
    simple: {
      aux: 'would',
      verbChain: ['verb']
    },
    continuous: {
      aux: 'would',
      verbChain: ['be', 'verb.ing']
    },
    perfect: {
      aux: 'would',
      verbChain: ['have', 'verb.v3']
    },
    perfect_continuous: {
      aux: 'would',
      verbChain: ['have', 'be.v3', 'verb.ing']
    }
  }
};
