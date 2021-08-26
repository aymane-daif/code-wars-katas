// https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num) {
  let numStr = num.toString();
  const numLen = numStr.length;
  let output = '';
  for (let i = 0; i < numLen; i++) {
    output += numStr[i] ** 2;
  }
  return +output;
}
console.log(squareDigits(3212), 9414);
