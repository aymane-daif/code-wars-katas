// https://www.codewars.com/kata/57a06005cf1fa5fbd5000216/

function wordsToSentence(words) {
  let len = words.length;
  let output = '';
  for (let i = 0; i < len; i++) {
    if (i == len - 1) output += words[i];
    else output += `${words[i]} `;
  }
  return output;
}
console.log(wordsToSentence(['hello', 'world']), 'hello world');
