// https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(str) {
  let strLen = str.length;
  let isOdd = strLen % 2 !== 0;

  let middle = Math.floor(strLen / 2);
  return isOdd ? str[middle] : `${str[middle - 1]}${str[middle]}`;
}

console.log(getMiddle('test'), 'should return "es"');
console.log(getMiddle('testing'), 'should return "t"');
console.log(getMiddle('middle'), 'should return "dd"');
console.log(getMiddle('A'), 'should return "A"');
