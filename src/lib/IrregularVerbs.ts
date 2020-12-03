import { Verbs } from '~/type';

export const irregularVerbs: Verbs = {
  // be is in the special verb list
  beat: { past: 'beat', v3: 'beaten' },
  become: { past: 'became', v3: 'become', ing: 'becoming' },
  begin: { past: 'began', v3: 'begun' },
  blow: { past: 'blew', v3: 'blown' },
  break: { past: 'broke', v3: 'broken' },
  bring: { past: 'brought', v3: 'brought' },
  build: { past: 'built', v3: 'built' },
  burst: { past: 'burst', v3: 'burst' },
  buy: { past: 'bought', v3: 'bought' },
  catch: { past: 'caught', v3: 'caught' },
  choose: { past: 'chose', v3: 'chosen', ing: 'choosing' },
  come: { past: 'came', v3: 'come', ing: 'coming' },
  cost: { past: 'cost', v3: 'cost' },
  cut: { past: 'cut', v3: 'cut', ing: 'cutting' },
  deal: { past: 'dealt', v3: 'dealt' },
  // do is in the special verb list
  draw: { past: 'drew', v3: 'drawn' },
  drink: { past: 'drank', v3: 'drunk' },
  drive: { past: 'drove', v3: 'driven', ing: 'driving' },
  eat: { past: 'ate', v3: 'eaten' },
  fall: { past: 'fell', v3: 'fallen' },
  feed: { past: 'fed', v3: 'fed' },
  feel: { past: 'felt', v3: 'felt' },
  fight: { past: 'fought', v3: 'fought' },
  find: { past: 'found', v3: 'found' },
  fly: { past: 'flew', v3: 'flown' },
  forget: { past: 'forgot', v3: 'forgotten', ing: 'forgetting' },
  freeze: { past: 'froze', v3: 'frozen', ing: 'freezing' },
  get: { past: 'got', v3: 'got' },
  give: { past: 'gave', v3: 'given' },
  go: { past: 'went', v3: 'gone', s: 'goes' },
  grow: { past: 'grew', v3: 'grown' },
  hang: { past: 'hung', v3: 'hung' },
  // have is in the special verb list
  hear: { past: 'heard', v3: 'heard' },
  hide: { past: 'hid', v3: 'hidden', ing: 'hiding' },
  hit: { past: 'hit', v3: 'hit', ing: 'hitting' },
  hold: { past: 'held', v3: 'held' },
  hurt: { past: 'hurt', v3: 'hurt' },
  keep: { past: 'kept', v3: 'kept' },
  know: { past: 'knew', v3: 'known' },
  lay: { past: 'laid', v3: 'laid' },
  lead: { past: 'led', v3: 'led' },
  leave: { past: 'left', v3: 'left', ing: 'leaving' },
  lend: { past: 'lent', v3: 'lent' },
  let: { past: 'let', v3: 'let', ing: 'letting' },
  lie: { past: 'lay', v3: 'lain', ing: 'lying' }, // be horizontal
  lose: { past: 'lost', v3: 'lost', ing: 'losing' },
  make: { past: 'made', v3: 'made', ing: 'making' },
  mean: { past: 'meant', v3: 'meant' },
  meet: { past: 'met', v3: 'met' },
  pay: { past: 'paid', v3: 'paid' },
  put: { past: 'put', v3: 'put', ing: 'putting' },
  read: { past: 'read', v3: 'read' },
  ride: { past: 'rode', v3: 'ridden', ing: 'riding' },
  ring: { past: 'rang', v3: 'rung' },
  rise: { past: 'rose', v3: 'risen', ing: 'rising' },
  run: { past: 'ran', v3: 'run', ing: 'running' },
  say: { past: 'said', v3: 'said' },
  see: { past: 'saw', v3: 'seen' },
  sell: { past: 'sold', v3: 'sold' },
  send: { past: 'sent', v3: 'sent' },
  set: { past: 'set', v3: 'set', ing: 'setting' },
  shake: { past: 'shook', v3: 'shaken', ing: 'shaking' },
  steal: { past: 'stole', v3: 'stolen' },
  shine: { past: 'shone', v3: 'shone', ing: 'shining' },
  shoot: { past: 'shot', v3: 'shot' },
  show: { past: 'showed', v3: 'shown' },
  shut: { past: 'shut', v3: 'shut', ing: 'shutting' },
  sing: { past: 'sang', v3: 'sung' },
  sink: { past: 'sank', v3: 'sunk' },
  sit: { past: 'sat', v3: 'sat', ing: 'sitting' },
  sleep: { past: 'slept', v3: 'slept' },
  slide: { past: 'slid', v3: 'slid', ing: 'sliding' },
  speak: { past: 'spoke', v3: 'spoken' },
  spend: { past: 'spent', v3: 'spent' },
  spring: { past: 'sprang', v3: 'sprung' },
  stand: { past: 'stood', v3: 'stood' },
  stick: { past: 'stuck', v3: 'stuck' },
  swear: { past: 'swore', v3: 'sworn' },
  sweep: { past: 'swept', v3: 'swept' },
  swim: { past: 'swam', v3: 'swum', ing: 'swimming' },
  swing: { past: 'swung', v3: 'swung' },
  take: { past: 'took', v3: 'taken', ing: 'taking' },
  teach: { past: 'taught', v3: 'taught' },
  tear: { past: 'tore', v3: 'torn' },
  tell: { past: 'told', v3: 'told' },
  think: { past: 'thought', v3: 'thought' },
  throw: { past: 'threw', v3: 'thrown' },
  understand: { past: 'understood', v3: 'understood' },
  wake: { past: 'woke', v3: 'woken', ing: 'waking' },
  wear: { past: 'wore', v3: 'worn' },
  weave: { past: 'wove', v3: 'woven', ing: 'weaving' },
  win: { past: 'won', v3: 'won', ing: 'winning' },
  write: { past: 'wrote', v3: 'written', ing: 'writing' }
};

Object.keys(irregularVerbs).forEach((key) => {
  const verb = irregularVerbs[key];
  /*if (key === verb.past && key === verb.v3) {
    console.log(`${key}, past: ${verb.past}, v3: ${verb.v3}`);
  }*/

  /*if (key !== verb.past && key !== verb.v3 && verb.past === verb.v3) {
    console.log(`${key}, past: ${verb.past}, v3: ${verb.v3}`);
  }*/

  /*if (key !== verb.past && key !== verb.v3 && verb.past !== verb.v3) {
    console.log(`${key}, past: ${verb.past}, v3: ${verb.v3}`);
  }*/

  if (key === verb.past && key !== verb.v3) {
    console.log(`${key}, past: ${verb.past}, v3: ${verb.v3}`);
  }
});
