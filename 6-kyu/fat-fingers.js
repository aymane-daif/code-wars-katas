// https://www.codewars.com/kata/5aa99584fd5777ee9a0001f1
const fatFingers = function (str) {
  if (!str) return str;
  let gibberish = '';
  let isUpper = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      isUpper = !isUpper;
    } else {
      if (isUpper) {
        let char = str[i];
        char =
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        gibberish += char;
      } else gibberish += str[i];
    }
  }
  return gibberish;
};

// console.log(fatFingers('The quick brown fox jumps over the lazy dog.'));
// console.log('The quick brown fox jumps over the lZY DOG.');
