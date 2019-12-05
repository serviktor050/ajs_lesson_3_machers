import heroes from './array.js';

function comparison(a, b) {
  return (b.health - a.health);
}

export default function sortOfArray(array) {
  return array.sort(comparison);
}

sortOfArray(heroes);
