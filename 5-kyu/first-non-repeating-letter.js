// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
function firstNonRepeatingLetter(s) {
  const lookup = new Map();
  const nonRepeatingLetters = [];
  s.split('').forEach((letter) => {
    if (lookup.has(letter.toLowerCase()))
      lookup.set(letter.toLowerCase(), lookup.get(letter.toLowerCase()) + 1);
    else lookup.set(letter.toLowerCase(), 1);
  });
  lookup.forEach((value, key) => {
    if (value === 1) nonRepeatingLetters.push(key);
  });
  if (nonRepeatingLetters.length >= 1) {
    let index = s.search(new RegExp(`${nonRepeatingLetters[0]}`, 'i'));
    return s[index];
  }
  return '';
}
console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
