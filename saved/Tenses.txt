import { TenseCollection, VerbForm } from '~/type';

export const tenses: TenseCollection = {
  past: {
    simple: {
      aux: 'do.past',
      auxReplacedBy: 'be',
      verbChain: ['verb']
      /*
      forms: {
        affirmative: ['subject', 'verb.past'],
        negative: ['subject', 'aux', 'not', 'verb'],
        interrogative: ['aux', 'subject', 'verb'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb']
      }
      */
    },
    continuous: {
      aux: 'be.past',
      verbChain: ['verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'verb.ing'],
        interrogative: ['aux', 'subject', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb.ing']
      }
      */
    },
    perfect: {
      aux: 'have.past',
      verbChain: ['verb.v3']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'verb.v3'],
        negative: ['subject', 'aux', 'not', 'verb.v3'],
        interrogative: ['aux', 'subject', 'verb.v3'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb.v3']
      }
      */
    },
    perfect_continuous: {
      aux: 'have.past',
      verbChain: ['been', 'verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'been', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'been', 'verb.ing'],
        interrogative: ['aux', 'subject', 'been', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'been', 'verb.ing']
      }
      */
    }
  },
  present: {
    simple: {
      aux: 'do.present',
      auxReplacedBy: 'be',
      verbChain: ['verb']
      /*
      forms: {
        affirmative: ['subject', 'verb.present'],
        negative: ['subject', 'aux', 'not', 'verb'],
        interrogative: ['aux', 'subject', 'verb'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb']
      }
      */
    },
    continuous: {
      aux: 'be.present',
      verbChain: ['verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'verb.ing'],
        interrogative: ['aux', 'subject', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb.ing']
      }
      */
    },
    perfect: {
      aux: 'have.present',
      verbChain: ['verb.v3']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'verb.v3'],
        negative: ['subject', 'aux', 'not', 'verb.v3'],
        interrogative: ['aux', 'subject', 'verb.v3'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb.v3']
      }
      */
    },
    perfect_continuous: {
      aux: 'have.present',
      verbChain: ['been', 'verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'been', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'been', 'verb.ing'],
        interrogative: ['aux', 'subject', 'been', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'been', 'verb.ing']
      }
      */
    }
  },
  future: {
    simple: {
      aux: 'will',
      verbChain: ['verb']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'verb'],
        negative: ['subject', 'aux', 'not', 'verb'],
        interrogative: ['aux', 'subject', 'verb'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb']
      }
      */
    },
    continuous: {
      aux: 'will',
      verbChain: ['be', 'verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'be', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'be', 'verb.ing'],
        interrogative: ['aux', 'subject', 'be', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'be', 'verb.ing']
      }
      */
    },
    perfect: {
      aux: 'will',
      verbChain: ['have', 'verb.v3']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'have', 'verb.v3'],
        negative: ['subject', 'aux', 'not', 'have', 'verb.v3'],
        interrogative: ['aux', 'subject', 'have', 'verb.v3'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'verb.v3']
      }
      */
    },
    perfect_continuous: {
      aux: 'will',
      verbChain: ['have', 'been', 'verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'have', 'been', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'have', 'been', 'verb.ing'],
        interrogative: ['aux', 'subject', 'have', 'been', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'been', 'verb.ing']
      }
      */
    }
  },
  future_in_past: {
    simple: {
      aux: 'would',
      verbChain: ['verb']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'verb'],
        negative: ['subject', 'aux', 'not', 'verb'],
        interrogative: ['aux', 'subject', 'verb'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb']
      }
      */
    },
    continuous: {
      aux: 'would',
      verbChain: ['be', 'verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'be', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'be', 'verb.ing'],
        interrogative: ['aux', 'subject', 'be', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'be', 'verb.ing']
      }
      */
    },
    perfect: {
      aux: 'would',
      verbChain: ['have', 'verb.v3']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'have', 'verb.v3'],
        negative: ['subject', 'aux', 'not', 'have', 'verb.v3'],
        interrogative: ['aux', 'subject', 'have', 'verb.v3'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'verb.v3']
      }
      */
    },
    perfect_continuous: {
      aux: 'would',
      verbChain: ['have', 'been', 'verb.ing']
      /*
      forms: {
        affirmative: ['subject', 'aux', 'have', 'been', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'have', 'been', 'verb.ing'],
        interrogative: ['aux', 'subject', 'have', 'been', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'been', 'verb.ing']
      }
      */
    }
  }
};
