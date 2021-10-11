// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  let output = [];
  let arrLen = arr.length;
  let countZeros = 0;
  let j = 0;
  for (let i = 0; i < arrLen; i++) {
    if (arr[i] === 0) {
      countZeros++;
    } else {
      output[j] = arr[i];
      j++;
    }
  }
  let k = 0;
  while (k < countZeros) {
    output.push(0);
    k++;
  }
  return output;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
