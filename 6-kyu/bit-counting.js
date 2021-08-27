// https://www.codewars.com/kata/526571aae218b8ee490006f4

function countBits(num) {
  let binNum = num.toString(2);
  let binNumLen = binNum.length;
  let count = 0;
  for (let i = 0; i < binNumLen; i++) {
    if (binNum[i] === '1') count++;
  }
  return count;
}

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
