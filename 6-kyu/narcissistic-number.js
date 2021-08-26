// https://www.codewars.com/kata/5287e858c6b5a9678200083c
function narcissistic(num) {
  const strNum = num.toString();
  const digitsNum = strNum.length;
  let sum = 0;
  strNum.split('').forEach((el) => {
    sum += el ** digitsNum;
  });
  return sum === num;
}
console.log(narcissistic(371)); // true
console.log(narcissistic(7)); // true
console.log(narcissistic(123)); // false
