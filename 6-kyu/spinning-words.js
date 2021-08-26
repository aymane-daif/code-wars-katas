// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(str) {
  return str
    .split(' ')
    .map((word) => {
      if (word.length >= 5) return reverseStr(word);
      return word;
    })
    .join(' ');
}

function reverseStr(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) reversed += str[i];
  return reversed;
}
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"
console.log('Hey wollef sroirraw');
console.log(spinWords('Hey fellow warriors'));
