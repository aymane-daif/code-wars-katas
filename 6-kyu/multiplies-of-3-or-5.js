// https://www.codewars.com/kata/514b92a657cdc65150000006/

function solution(number) {
  number = number - 1;
  let sum = 0;

  while (number > 0) {
    if (number % 3 === 0 || number % 5 === 0) sum += number;
    number--;
  }
  return sum;
}
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and
// 9. The sum of these multiples is 23.
console.log(solution(10));
