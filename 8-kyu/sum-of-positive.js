// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((el) => {
    if (el > 0) sum += el;
  });
  return sum;
}
