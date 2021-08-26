// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(arr) {
  const arrLen = arr.length;
  const numbers = {};
  for (let i = 0; i < arrLen; i++) {
    if (numbers[arr[i]]) numbers[arr[i]] += 1;
    else numbers[arr[i]] = 1;
  }

  for (let j = 0; j < arrLen; j++) {
    if (numbers[arr[j]] % 2 !== 0) return arr[j];
  }
}
console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
