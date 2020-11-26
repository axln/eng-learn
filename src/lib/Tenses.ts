import { TenseCollection } from '~/type';

export const tenses: TenseCollection = {
  past: {
    simple: {
      aux: 'do',
      aux_replace: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'verb:past'],
          passive: ['subject', 'be:past', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:past', 'not', 'verb'],
          passive: ['subject', 'be:past', 'not', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:past', 'subject', 'verb'],
          passive: ['be:past', 'subject', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:past', 'subject', 'not', 'verb'],
          active_contracted: ['aux:past', 'not', 'subject', 'verb'],
          passive: ['be:past', 'subject', 'not', 'verb:v3'],
          passive_contracted: ['be:past', 'not', 'subject', 'verb:v3'],
          end: '?'
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'aux:past', 'verb:ing'],
          passive: ['subject', 'aux:past', 'being', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:past', 'not', 'verb:ing'],
          passive: ['subject', 'aux:past', 'not', 'being', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:past', 'subject', 'verb:ing'],
          passive: ['aux:past', 'subject', 'being', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:past', 'subject', 'not', 'verb:ing'],
          passive: ['aux:past', 'subject', 'not', 'being', 'verb:v3'],
          active_contracted: ['aux:past', 'not', 'subject', 'verb:ing'],
          passive_contracted: ['aux:past', 'not', 'subject', 'being', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux:past', 'verb:v3'],
          passive: ['subject', 'aux:past', 'been:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:past', 'not', 'verb:v3'],
          passive: ['subject', 'aux:past', 'not', 'been:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:past', 'subject', 'verb:v3'],
          passive: ['aux:past', 'subject', 'been:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:past', 'subject', 'not', 'verb:v3'],
          passive: ['aux:past', 'subject', 'not', 'been:verb', 'verb:v3'],
          active_contracted: ['aux:past', 'not', 'subject', 'verb:v3'],
          passive_contracted: ['aux:past', 'not', 'subject', 'been:verb', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux:past', 'been:aux', 'verb:ing'],
          passive: ['subject', 'aux:past', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:past', 'not', 'been:aux', 'verb:ing'],
          passive: ['subject', 'aux:past', 'not', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:past', 'subject', 'been:aux', 'verb:ing'],
          passive: ['aux:past', 'subject', 'been:aux', 'being:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:past', 'subject', 'not', 'been:aux', 'verb:ing'],
          passive: ['aux:past', 'subject', 'not', 'been:aux', 'being:verb', 'verb:v3'],
          active_contracted: ['aux:past', 'not', 'subject', 'been:aux', 'verb:ing'],
          passive_contracted: ['aux:past', 'not', 'subject', 'been:aux', 'being:verb', 'verb:v3'],
          end: '?'
        }
      }
    }
  },
  present: {
    simple: {
      aux: 'do',
      aux_replace: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'verb:present'],
          passive: ['subject', 'be:present', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:present', 'not', 'verb'],
          passive: ['subject', 'be:present', 'not', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:present', 'subject', 'verb'],
          passive: ['be:present', 'subject', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:present', 'subject', 'not', 'verb'],
          active_contracted: ['aux:present', 'not', 'subject', 'verb'],
          passive: ['be:present', 'subject', 'not', 'verb:v3'],
          passive_contracted: ['be:present', 'not', 'subject', 'verb:v3'],
          end: '?'
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'aux:present', 'verb:ing'],
          passive: ['subject', 'aux:present', 'being', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:present', 'not', 'verb:ing'],
          passive: ['subject', 'aux:present', 'not', 'being', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:present', 'subject', 'verb:ing'],
          passive: ['aux:present', 'subject', 'being', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:present', 'subject', 'not', 'verb:ing'],
          passive: ['aux:present', 'subject', 'not', 'being', 'verb:v3'],
          active_contracted: ['aux:present', 'not', 'subject', 'verb:ing'],
          passive_contracted: ['aux:present', 'not', 'subject', 'being', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux:present', 'verb:v3'],
          passive: ['subject', 'aux:present', 'been:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:present', 'not', 'verb:v3'],
          passive: ['subject', 'aux:present', 'not', 'been:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:present', 'subject', 'verb:v3'],
          passive: ['aux:present', 'subject', 'been:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:present', 'subject', 'not', 'verb:v3'],
          passive: ['aux:present', 'subject', 'not', 'been:verb', 'verb:v3'],
          active_contracted: ['aux:present', 'not', 'subject', 'verb:v3'],
          passive_contracted: ['aux:present', 'not', 'subject', 'been:verb', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'aux:present', 'been:aux', 'verb:ing'],
          passive: ['subject', 'aux:present', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'aux:present', 'not', 'been:aux', 'verb:ing'],
          passive: ['subject', 'aux:present', 'not', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['aux:present', 'subject', 'been:aux', 'verb:ing'],
          passive: ['aux:present', 'subject', 'been:aux', 'being:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['aux:present', 'subject', 'not', 'been:aux', 'verb:ing'],
          passive: ['aux:present', 'subject', 'not', 'been:aux', 'being:verb', 'verb:v3'],
          active_contracted: ['aux:present', 'not', 'subject', 'been:aux', 'verb:ing'],
          passive_contracted: [
            'aux:present',
            'not',
            'subject',
            'been:aux',
            'being:verb',
            'verb:v3'
          ],
          end: '?'
        }
      }
    }
  },
  future: {
    simple: {
      aux: 'do',
      aux_replace: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'verb'],
          passive: ['subject', 'will', 'be:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'will', 'not', 'verb'],
          passive: ['subject', 'will', 'not', 'be', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['will', 'subject', 'verb'],
          passive: ['will', 'subject', 'be', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'verb'],
          passive: ['will', 'subject', 'not', 'be', 'verb:v3'],
          active_contracted: ['will', 'not', 'subject', 'verb'],
          passive_contracted: ['will', 'not', 'subject', 'be', 'verb:v3'],
          end: '?'
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'aux', 'verb:ing'],
          passive: ['subject', 'will', 'aux', 'being', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'will', 'not', 'aux', 'verb:ing'],
          passive: ['subject', 'will', 'not', 'aux', 'being', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['will', 'subject', 'aux', 'verb:ing'],
          passive: ['will', 'subject', 'aux', 'being', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'aux', 'verb:ing'],
          passive: ['will', 'subject', 'not', 'aux', 'being', 'verb:v3'],
          active_contracted: ['will', 'not', 'subject', 'aux', 'verb:ing'],
          passive_contracted: ['will', 'not', 'subject', 'aux', 'being', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'aux', 'verb:v3'],
          passive: ['subject', 'will', 'aux', 'been:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'will', 'not', 'aux', 'verb:v3'],
          passive: ['subject', 'will', 'not', 'aux', 'been:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['will', 'subject', 'aux', 'verb:v3'],
          passive: ['will', 'subject', 'aux', 'been', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'aux', 'verb:v3'],
          passive: ['will', 'subject', 'not', 'aux', 'been', 'verb:v3'],
          active_contracted: ['will', 'not', 'subject', 'aux', 'verb:v3'],
          passive_contracted: ['will', 'not', 'subject', 'aux', 'been', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'will', 'aux', 'been:aux', 'verb:ing'],
          passive: ['subject', 'will', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'will', 'not', 'aux', 'been:aux', 'verb:ing'],
          passive: ['subject', 'will', 'not', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['will', 'subject', 'aux', 'been:aux', 'verb:ing'],
          passive: ['will', 'subject', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['will', 'subject', 'not', 'aux', 'been:aux', 'verb:ing'],
          passive: ['will', 'subject', 'not', 'aux', 'been:aux', 'being', 'verb:v3'],
          active_contracted: ['will', 'not', 'subject', 'aux', 'been:aux', 'verb:ing'],
          passive_contracted: [
            'will',
            'not',
            'subject',
            'aux',
            'been:aux',
            'being:verb',
            'verb:v3'
          ],
          end: '?'
        }
      }
    }
  },
  future_in_past: {
    simple: {
      aux: 'do',
      aux_replace: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'verb'],
          passive: ['subject', 'would', 'be:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'would', 'not', 'verb'],
          passive: ['subject', 'would', 'not', 'be', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['would', 'subject', 'verb'],
          passive: ['would', 'subject', 'be', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'verb'],
          passive: ['would', 'subject', 'not', 'be', 'verb:v3'],
          active_contracted: ['would', 'not', 'subject', 'verb'],
          passive_contracted: ['would', 'not', 'subject', 'be', 'verb:v3'],
          end: '?'
        }
      }
    },
    continuous: {
      aux: 'be',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'aux', 'verb:ing'],
          passive: ['subject', 'would', 'aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'would', 'not', 'aux', 'verb:ing'],
          passive: ['subject', 'would', 'not', 'aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['would', 'subject', 'aux', 'verb:ing'],
          passive: ['would', 'subject', 'aux', 'being:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'aux', 'verb:ing'],
          passive: ['would', 'subject', 'not', 'aux', 'being:verb', 'verb:v3'],
          active_contracted: ['would', 'not', 'subject', 'aux', 'verb:ing'],
          passive_contracted: ['would', 'not', 'subject', 'aux', 'being:verb', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'aux', 'verb:v3'],
          passive: ['subject', 'would', 'aux', 'been:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'would', 'not', 'aux', 'verb:v3'],
          passive: ['subject', 'would', 'not', 'aux', 'been:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['would', 'subject', 'aux', 'verb:v3'],
          passive: ['would', 'subject', 'aux', 'been:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'aux', 'verb:v3'],
          passive: ['would', 'subject', 'not', 'aux', 'been:verb', 'verb:v3'],
          active_contracted: ['would', 'not', 'subject', 'aux', 'verb:v3'],
          passive_contracted: ['would', 'not', 'subject', 'aux', 'been:verb', 'verb:v3'],
          end: '?'
        }
      }
    },
    perfect_continuous: {
      aux: 'have',
      forms: {
        affirmative: {
          active: ['subject', 'would', 'aux', 'been:aux', 'verb:ing'],
          passive: ['subject', 'would', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        negative: {
          active: ['subject', 'would', 'not', 'aux', 'been:aux', 'verb:ing'],
          passive: ['subject', 'would', 'not', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          end: '.'
        },
        interrogative: {
          active: ['would', 'subject', 'aux', 'been:aux', 'verb:ing'],
          passive: ['would', 'subject', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          end: '?'
        },
        negative_interrogative: {
          active: ['would', 'subject', 'not', 'aux', 'been:aux', 'verb:ing'],
          passive: ['would', 'subject', 'not', 'aux', 'been:aux', 'being:verb', 'verb:v3'],
          active_contracted: ['would', 'not', 'subject', 'aux', 'been:aux', 'verb:ing'],
          passive_contracted: [
            'would',
            'not',
            'subject',
            'aux',
            'been:aux',
            'being:verb',
            'verb:v3'
          ],
          end: '?'
        }
      }
    }
  }
};
