import { Tenses, VerbForm } from '~/type';

export const tenses: Tenses = {
  simple: {
    past: {
      firstVerbForm: VerbForm.past,
      verbChain: ['do.past', 'verb'],
      auxReplacedBy: 'be'
    },
    present: {
      firstVerbForm: VerbForm.present,
      verbChain: ['do.present', 'verb'],
      auxReplacedBy: 'be'
    },
    future: {
      verbChain: ['will', 'verb']
    },
    future_in_past: {
      verbChain: ['would', 'verb']
    }
  },
  continuous: {
    past: {
      firstVerbForm: VerbForm.past,
      verbChain: ['be.past', 'verb.ing']
    },
    present: {
      firstVerbForm: VerbForm.present,
      verbChain: ['be.present', 'verb.ing']
    },
    future: {
      verbChain: ['will', 'be', 'verb.ing']
    },
    future_in_past: {
      verbChain: ['would', 'be', 'verb.ing']
    }
  },
  perfect: {
    past: {
      firstVerbForm: VerbForm.past,
      verbChain: ['have.past', 'verb.v3']
    },
    present: {
      firstVerbForm: VerbForm.present,
      verbChain: ['have.present', 'verb.v3']
    },
    future: {
      verbChain: ['will', 'have', 'verb.v3']
    },
    future_in_past: {
      verbChain: ['would', 'have', 'verb.v3']
    }
  },
  perfect_continuous: {
    past: {
      firstVerbForm: VerbForm.past,
      verbChain: ['have.past', 'be.v3', 'verb.ing']
    },
    present: {
      firstVerbForm: VerbForm.present,
      verbChain: ['have.present', 'be.v3', 'verb.ing']
    },
    future: {
      verbChain: ['will', 'have', 'be.v3', 'verb.ing']
    },
    future_in_past: {
      verbChain: ['would', 'have', 'be.v3', 'verb.ing']
    }
  }
};
