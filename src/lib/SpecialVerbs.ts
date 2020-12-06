import { SpecialVerbs } from '~/type';

export const specialVerbs: SpecialVerbs = {
  be: {
    past: {
      first: { singular: 'was', plural: 'were' },
      second: 'were',
      third: { singular: 'was', plural: 'were' }
    },
    present: {
      first: { singular: 'am', plural: 'are' },
      second: 'are',
      third: { singular: 'is', plural: 'are' }
    },
    v3: 'been',
    ing: 'being'
  },
  have: {
    past: 'had',
    present: {
      first: 'have',
      second: 'have',
      third: { singular: 'has', plural: 'have' }
    },
    v3: 'had',
    ing: 'having'
  }
};
