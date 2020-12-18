let westeros = {
  cersei: 'Lannister',
  arya: 'Stark',
  jon: 'Snow',
  brienne: 'Tarth',
  daenerys: 'Targaryen',
  theon: 'Greyjoy',
  jorah: 'Mormont',
  margaery: 'Tyrell',
  sandor: 'Clegane',
  samwell: 'Tarly',
  ramsay: 'Bolton',
};

const objectMap = (obj, fn) => {
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));
};

console.log(objectMap(westeros, (v) => 2 * v));
