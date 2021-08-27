// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(num) {
  let numStr = num.toString();
  let numLen = numStr.length;

  while (numLen > 1) {
    let sum = 0;
    for (let i = 0; i < numLen; i++) {
      sum += +numStr[i];
    }
    numStr = sum.toString();
    numLen = numStr.length;
  }
  return +numStr;
}

console.log(digital_root(942)); // 942 => 9 + 4 + 2 = 15 => 1 + 5 => 6
console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
