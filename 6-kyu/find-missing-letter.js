// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/

function findMissingLetter(arr) {
  const str = arr.join('');
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1)
      return String.fromCharCode(str.charCodeAt(i) + 1);
  }
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
