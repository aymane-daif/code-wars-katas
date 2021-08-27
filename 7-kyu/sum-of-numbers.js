// https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum(a, b) {
  if (a === b) return a;
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
