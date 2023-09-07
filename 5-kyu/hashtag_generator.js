//https://www.codewars.com/kata/52449b062fb80683ec000024
function generateHashtag(str) {
  if (!str.trim()) return false;
  if (str.replaceAll(' ', '').length >= 140) return false;

  let output = trimStr(str)
    .split(' ')
    .filter((word) => word !== ' ')
    .map((word) => capitalize(word))
    .join('');
  return addHashtag(output);
}
const capitalize = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};
const addHashtag = (str) => {
  return `#${str}`;
};

const trimStr = (str) => {
  return str
    .trim()
    .split('')
    .filter(
      (word, idx, arr) =>
        arr[idx] !== ' ' || (arr[idx] === ' ' && arr[idx + 1] !== ' ')
    )
    .join('');
};

console.log(
  generateHashtag('') === false,
  'Expected an empty string to return false'
);
console.log(
  generateHashtag(' '.repeat(200)) === false,
  'Still an empty string'
);
console.log(
  generateHashtag('Do We have A Hashtag') === '#DoWeHaveAHashtag',
  'Expected a Hashtag (#) at the beginning.'
);
console.log(
  generateHashtag('Codewars') === '#Codewars',
  'Should handle a single word.'
);
console.log(
  generateHashtag('Codewars Is Nice') === '#CodewarsIsNice',
  'Should remove spaces.'
);
console.log(
  generateHashtag('Codewars is nice') === '#CodewarsIsNice',
  'Should capitalize first letters of words.'
);
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars') === '#CodeWars');
console.log(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
  ) === false,
  'Should return false if the final word is longer than 140 chars.'
);
console.log(
  generateHashtag('a'.repeat(139)) === '#A' + 'a'.repeat(138),
  'Should work'
);
console.log(generateHashtag('a'.repeat(140)) === false, 'Too long');
