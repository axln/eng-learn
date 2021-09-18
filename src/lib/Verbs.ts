import { Verbs } from '~/type';

// empty objects mean that all the verb forms are constructed
// by simple appending the corresponding suffixes: -s, -ed, -ing

export const verbs: Verbs = {
  ask: {},
  call: {},
  help: {},
  look: {},
  lie: { ed: 'lied', ing: 'lying' }, // tell untruth
  love: { ed: 'loved', ing: 'loving' },
  move: { ed: 'moved', ing: 'moving' },
  need: {},
  play: {},
  seem: {},
  start: {},
  talk: {},
  try: { s: 'tries', ed: 'tried' },
  turn: {},
  use: { ed: 'used', ing: 'using' },
  walk: {},
  want: {},
  work: {}
};
