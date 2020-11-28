import { TenseCollection } from '~/type';

export const tenses: TenseCollection = {
  past: {
    simple: {
      aux: 'do',
      aux_replaced_by: 'be',
      forms: {
        affirmative: ['subject', 'verb.past'],
        negative: ['subject', 'aux.past', 'not', 'verb'],
        interrogative: ['aux.past', 'subject', 'verb'],
        negative_interrogative: ['aux.past', 'subject', 'not', 'verb']
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: ['subject', 'aux.past', 'verb.ing'],
        negative: ['subject', 'aux.past', 'not', 'verb.ing'],
        interrogative: ['aux.past', 'subject', 'verb.ing'],
        negative_interrogative: ['aux.past', 'subject', 'not', 'verb.ing']
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: ['subject', 'aux.past', 'verb.v3'],
        negative: ['subject', 'aux.past', 'not', 'verb.v3'],
        interrogative: ['aux.past', 'subject', 'verb.v3'],
        negative_interrogative: ['aux.past', 'subject', 'not', 'verb.v3']
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: ['subject', 'aux.past', 'been', 'verb.ing'],
        negative: ['subject', 'aux.past', 'not', 'been', 'verb.ing'],
        interrogative: ['aux.past', 'subject', 'been', 'verb.ing'],
        negative_interrogative: ['aux.past', 'subject', 'not', 'been', 'verb.ing']
      }
    }
  },
  present: {
    simple: {
      aux: 'do',
      aux_replaced_by: 'be',
      forms: {
        affirmative: ['subject', 'verb.present'],
        negative: ['subject', 'aux.present', 'not', 'verb'],
        interrogative: ['aux.present', 'subject', 'verb'],
        negative_interrogative: ['aux.present', 'subject', 'not', 'verb']
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: ['subject', 'aux.present', 'verb.ing'],
        negative: ['subject', 'aux.present', 'not', 'verb.ing'],
        interrogative: ['aux.present', 'subject', 'verb.ing'],
        negative_interrogative: ['aux.present', 'subject', 'not', 'verb.ing']
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: ['subject', 'aux.present', 'verb.v3'],
        negative: ['subject', 'aux.present', 'not', 'verb.v3'],
        interrogative: ['aux.present', 'subject', 'verb.v3'],
        negative_interrogative: ['aux.present', 'subject', 'not', 'verb.v3']
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: ['subject', 'aux.present', 'been', 'verb.ing'],
        negative: ['subject', 'aux.present', 'not', 'been', 'verb.ing'],
        interrogative: ['aux.present', 'subject', 'been', 'verb.ing'],
        negative_interrogative: ['aux.present', 'subject', 'not', 'been', 'verb.ing']
      }
    }
  },
  future: {
    simple: {
      aux: 'will',
      forms: {
        affirmative: ['subject', 'aux', 'verb'],
        negative: ['subject', 'aux', 'not', 'verb'],
        interrogative: ['aux', 'subject', 'verb'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb']
      }
    },
    continuous: {
      aux: 'will',
      forms: {
        affirmative: ['subject', 'aux', 'be', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'be', 'verb.ing'],
        interrogative: ['aux', 'subject', 'be', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'be', 'verb.ing']
      }
    },
    perfect: {
      aux: 'will',
      forms: {
        affirmative: ['subject', 'aux', 'have', 'verb.v3'],
        negative: ['subject', 'aux', 'not', 'have', 'verb.v3'],
        interrogative: ['aux', 'subject', 'have', 'verb.v3'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'verb.v3']
      }
    },
    perfect_continuous: {
      aux: 'will',
      forms: {
        affirmative: ['subject', 'aux', 'have', 'been', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'have', 'been', 'verb.ing'],
        interrogative: ['aux', 'subject', 'have', 'been', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'been', 'verb.ing']
      }
    }
  },
  future_in_past: {
    simple: {
      aux: 'would',
      forms: {
        affirmative: ['subject', 'aux', 'verb'],
        negative: ['subject', 'aux', 'not', 'verb'],
        interrogative: ['aux', 'subject', 'verb'],
        negative_interrogative: ['aux', 'subject', 'not', 'verb']
      }
    },
    continuous: {
      aux: 'would',
      forms: {
        affirmative: ['subject', 'aux', 'be', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'be', 'verb.ing'],
        interrogative: ['aux', 'subject', 'be', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'be', 'verb.ing']
      }
    },
    perfect: {
      aux: 'would',
      forms: {
        affirmative: ['subject', 'aux', 'have', 'verb.v3'],
        negative: ['subject', 'aux', 'not', 'have', 'verb.v3'],
        interrogative: ['aux', 'subject', 'have', 'verb.v3'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'verb.v3']
      }
    },
    perfect_continuous: {
      aux: 'would',
      forms: {
        affirmative: ['subject', 'aux', 'have', 'been', 'verb.ing'],
        negative: ['subject', 'aux', 'not', 'have', 'been', 'verb.ing'],
        interrogative: ['aux', 'subject', 'have', 'been', 'verb.ing'],
        negative_interrogative: ['aux', 'subject', 'not', 'have', 'been', 'verb.ing']
      }
    }
  }
};
