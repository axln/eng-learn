import { Aspects } from '~/type';

export const aspects: Aspects = {
  simple: {
    auxReplacedBy: 'be',
    verbChain: ['do', 'verb']
  },
  continuous: {
    verbChain: ['be', 'verb.ing']
  },
  perfect: {
    verbChain: ['have', 'verb.v3']
  },
  perfect_continuous: {
    verbChain: ['have', 'be.v3', 'verb.ing']
  }
};
