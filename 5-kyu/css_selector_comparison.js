//https://www.codewars.com/kata/5379fdfad08fab63c6000a63
function compare(a, b) {
  if (a === '*') return b;
  if (b === '*') return a;

  let numOfIdsInA = numOfOccurrences(a, '#');
  let numOfClassesInA = numOfOccurrences(a, '.');
  let numOfTagsInA = numOfOccurrences(a, ' ');
  if (!a.startsWith('.') && !a.startsWith('#')) numOfTagsInA++;
  let numOfIdsInB = numOfOccurrences(b, '#');
  let numOfClassesInB = numOfOccurrences(b, '.');
  let numOfTagsInB = numOfOccurrences(b, ' ');
  if (!b.startsWith('.') && !b.startsWith('#')) numOfTagsInB++;

  if (numOfIdsInA > numOfIdsInB) return a;
  if (numOfIdsInB > numOfIdsInA) return b;
  if (numOfClassesInA > numOfClassesInB) return a;
  if (numOfClassesInB > numOfClassesInA) return b;
  if (numOfTagsInA > numOfTagsInB) return a;
  if (numOfTagsInB > numOfTagsInA) return b;

  return b;
}

const numOfOccurrences = (str, pattern) => {
  return str
    .split('')
    .filter((c, idx) =>
      pattern === ' '
        ? c === pattern &&
          !str[idx + 1].startsWith('.') &&
          !str[idx + 1].startsWith('#')
        : c === pattern
    ).length;
};
