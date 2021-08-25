//https://www.codewars.com/kata/5390bac347d09b7da40006f6/

String.prototype.toJadenCase = function () {
  //split string to words
  let words = this.split(' ');
  //iterate over words and return each word capitalized then join words to one single string
  words = words
    .map(
      (word) =>
        word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
    )
    .join(' ');
  return words;
};
const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
