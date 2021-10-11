// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  let output = '';
  str.split(' ').forEach((word) => {
    if (!/^[a-zA-Z]*$/.test(word)) {
      output += `${word} `;
    } else {
      for (let i = 1; i < word.length; i++) {
        output += word[i];
      }
      output += `${word[0]}ay `;
    }
  });
  return output.trim();
}
console.log(pigIt('Hello world !'));
console.log('elloHay orldway !');
console.log(pigIt('Pig latin is cool'));
console.log('igPay atinlay siay oolcay');
