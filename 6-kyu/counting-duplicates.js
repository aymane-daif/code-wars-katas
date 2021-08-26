// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

function duplicateCount(str) {
  str = str.toLowerCase();
  const strLen = str.length;
  const countChars = {};
  let res = 0;
  for (let i = 0; i < strLen; i++) {
    if (countChars[str[i]]) countChars[str[i]] += 1;
    else countChars[str[i]] = 1;
  }

  for (let char in countChars) {
    if (countChars[char] >= 2) res++;
  }

  return res;
}
console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2);
console.log(duplicateCount('Indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2);
