import { AuxVerbs } from '~/type';

export const auxVerbs: AuxVerbs = {
  be: {
    past: [
      {
        singular: 'was',
        plural: 'were'
      },
      'were',
      {
        singular: 'was',
        plural: 'were'
      }
    ],
    present: [
      {
        singular: 'am',
        plural: 'are'
      },
      'are',
      {
        singular: 'is',
        plural: 'are'
      }
    ],
    future: 'will be'
  },
  do: {
    past: 'did',
    present: [
      'do',
      'do',
      {
        singular: 'does',
        plural: 'do'
      }
    ],
    future: 'will do'
  },
  have: {
    past: 'had',
    present: [
      {
        singular: 'have',
        plural: 'have'
      },
      {
        singular: 'have',
        plural: 'have'
      },
      {
        singular: 'has',
        plural: 'have'
      }
    ],
    future: 'will have'
  }
};
