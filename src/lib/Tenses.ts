import { TenseCollection } from '~/type';

export const tenses: TenseCollection = {
  past: {
    simple: {
      aux: 'do',
      aux_replaced_by: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'verb.past'],
          passive: ['subject', 'be.past', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.past', 'not', 'verb'],
          passive: ['subject', 'be.past', 'not', 'verb.v3']
        },
        interrogative: {
          active: ['aux.past', 'subject', 'verb'],
          passive: ['be.past', 'subject', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.past', 'subject', 'not', 'verb'],
          passive: ['be.past', 'subject', 'not', 'verb.v3']
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'aux.past', 'verb.ing'],
          passive: ['subject', 'aux.past', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.past', 'not', 'verb.ing'],
          passive: ['subject', 'aux.past', 'not', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['aux.past', 'subject', 'verb.ing'],
          passive: ['aux.past', 'subject', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.past', 'subject', 'not', 'verb.ing'],
          passive: ['aux.past', 'subject', 'not', 'being', 'verb.v3']
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux.past', 'verb.v3'],
          passive: ['subject', 'aux.past', 'been', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.past', 'not', 'verb.v3'],
          passive: ['subject', 'aux.past', 'not', 'been', 'verb.v3']
        },
        interrogative: {
          active: ['aux.past', 'subject', 'verb.v3'],
          passive: ['aux.past', 'subject', 'been', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.past', 'subject', 'not', 'verb.v3'],
          passive: ['aux.past', 'subject', 'not', 'been', 'verb.v3']
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux.past', 'been', 'verb.ing'],
          passive: ['subject', 'aux.past', 'been', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.past', 'not', 'been', 'verb.ing'],
          passive: ['subject', 'aux.past', 'not', 'been', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['aux.past', 'subject', 'been', 'verb.ing'],
          passive: ['aux.past', 'subject', 'been', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.past', 'subject', 'not', 'been', 'verb.ing'],
          passive: ['aux.past', 'subject', 'not', 'been', 'being', 'verb.v3']
        }
      }
    }
  },
  present: {
    simple: {
      aux: 'do',
      aux_replaced_by: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'verb.present'],
          passive: ['subject', 'be.present', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.present', 'not', 'verb'],
          passive: ['subject', 'be.present', 'not', 'verb.v3']
        },
        interrogative: {
          active: ['aux.present', 'subject', 'verb'],
          passive: ['be.present', 'subject', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.present', 'subject', 'not', 'verb'],
          passive: ['be.present', 'subject', 'not', 'verb.v3']
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'aux.present', 'verb.ing'],
          passive: ['subject', 'aux.present', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.present', 'not', 'verb.ing'],
          passive: ['subject', 'aux.present', 'not', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['aux.present', 'subject', 'verb.ing'],
          passive: ['aux.present', 'subject', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.present', 'subject', 'not', 'verb.ing'],
          passive: ['aux.present', 'subject', 'not', 'being', 'verb.v3']
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux.present', 'verb.v3'],
          passive: ['subject', 'aux.present', 'been', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.present', 'not', 'verb.v3'],
          passive: ['subject', 'aux.present', 'not', 'been', 'verb.v3']
        },
        interrogative: {
          active: ['aux.present', 'subject', 'verb.v3'],
          passive: ['aux.present', 'subject', 'been', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.present', 'subject', 'not', 'verb.v3'],
          passive: ['aux.present', 'subject', 'not', 'been', 'verb.v3']
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux.present', 'been', 'verb.ing'],
          passive: ['subject', 'aux.present', 'been', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'aux.present', 'not', 'been', 'verb.ing'],
          passive: ['subject', 'aux.present', 'not', 'been', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['aux.present', 'subject', 'been', 'verb.ing'],
          passive: ['aux.present', 'subject', 'been', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['aux.present', 'subject', 'not', 'been', 'verb.ing'],
          passive: ['aux.present', 'subject', 'not', 'been', 'being', 'verb.v3']
        }
      }
    }
  },
  future: {
    simple: {
      aux: 'do',
      aux_replaced_by: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'verb'],
          passive: ['subject', 'will', 'be', 'verb.v3']
        },
        negative: {
          active: ['subject', 'will', 'not', 'verb'],
          passive: ['subject', 'will', 'not', 'be', 'verb.v3']
        },
        interrogative: {
          active: ['will', 'subject', 'verb'],
          passive: ['will', 'subject', 'be', 'verb.v3']
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'verb'],
          passive: ['will', 'subject', 'not', 'be', 'verb.v3']
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'aux', 'verb.ing'],
          passive: ['subject', 'will', 'aux', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'will', 'not', 'aux', 'verb.ing'],
          passive: ['subject', 'will', 'not', 'aux', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['will', 'subject', 'aux', 'verb.ing'],
          passive: ['will', 'subject', 'aux', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'aux', 'verb.ing'],
          passive: ['will', 'subject', 'not', 'aux', 'being', 'verb.v3']
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'aux', 'verb.v3'],
          passive: ['subject', 'will', 'aux', 'been', 'verb.v3']
        },
        negative: {
          active: ['subject', 'will', 'not', 'aux', 'verb.v3'],
          passive: ['subject', 'will', 'not', 'aux', 'been', 'verb.v3']
        },
        interrogative: {
          active: ['will', 'subject', 'aux', 'verb.v3'],
          passive: ['will', 'subject', 'aux', 'been', 'verb.v3']
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'aux', 'verb.v3'],
          passive: ['will', 'subject', 'not', 'aux', 'been', 'verb.v3']
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'aux', 'been', 'verb.ing'],
          passive: ['subject', 'will', 'aux', 'been', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'will', 'not', 'aux', 'been', 'verb.ing'],
          passive: ['subject', 'will', 'not', 'aux', 'been', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['will', 'subject', 'aux', 'been', 'verb.ing'],
          passive: ['will', 'subject', 'aux', 'been', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'aux', 'been', 'verb.ing'],
          passive: ['will', 'subject', 'not', 'aux', 'been', 'being', 'verb.v3']
        }
      }
    }
  },
  future_in_past: {
    simple: {
      aux: 'do',
      aux_replaced_by: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'verb'],
          passive: ['subject', 'would', 'be', 'verb.v3']
        },
        negative: {
          active: ['subject', 'would', 'not', 'verb'],
          passive: ['subject', 'would', 'not', 'be', 'verb.v3']
        },
        interrogative: {
          active: ['would', 'subject', 'verb'],
          passive: ['would', 'subject', 'be', 'verb.v3']
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'verb'],
          passive: ['would', 'subject', 'not', 'be', 'verb.v3']
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'aux', 'verb.ing'],
          passive: ['subject', 'would', 'aux', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'would', 'not', 'aux', 'verb.ing'],
          passive: ['subject', 'would', 'not', 'aux', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['would', 'subject', 'aux', 'verb.ing'],
          passive: ['would', 'subject', 'aux', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'aux', 'verb.ing'],
          passive: ['would', 'subject', 'not', 'aux', 'being', 'verb.v3']
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'aux', 'verb.v3'],
          passive: ['subject', 'would', 'aux', 'been', 'verb.v3']
        },
        negative: {
          active: ['subject', 'would', 'not', 'aux', 'verb.v3'],
          passive: ['subject', 'would', 'not', 'aux', 'been', 'verb.v3']
        },
        interrogative: {
          active: ['would', 'subject', 'aux', 'verb.v3'],
          passive: ['would', 'subject', 'aux', 'been', 'verb.v3']
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'aux', 'verb.v3'],
          passive: ['would', 'subject', 'not', 'aux', 'been', 'verb.v3']
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'aux', 'been', 'verb.ing'],
          passive: ['subject', 'would', 'aux', 'been', 'being', 'verb.v3']
        },
        negative: {
          active: ['subject', 'would', 'not', 'aux', 'been', 'verb.ing'],
          passive: ['subject', 'would', 'not', 'aux', 'been', 'being', 'verb.v3']
        },
        interrogative: {
          active: ['would', 'subject', 'aux', 'been', 'verb.ing'],
          passive: ['would', 'subject', 'aux', 'been', 'being', 'verb.v3']
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'aux', 'been', 'verb.ing'],
          passive: ['would', 'subject', 'not', 'aux', 'been', 'being', 'verb.v3']
        }
      }
    }
  }
};
