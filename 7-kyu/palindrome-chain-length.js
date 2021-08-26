// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/

function palindromeChainLength(number) {
  let steps = 0;
  let numStr = number.toString();
  let numStrLen = 0;
  let reversedNum = '';

  do {
    numStrLen = numStr.length;
    reversedNum = '';
    for (let i = numStrLen - 1; i >= 0; i--) {
      reversedNum += numStr[i];
    }
    if (reversedNum != numStr) {
      numStr = `${parseInt(reversedNum) + parseInt(numStr)}`;
      steps++;
    }
  } while (reversedNum != numStr);
  return steps;
}
console.log(palindromeChainLength(87));
// 87 +   78 =  165     - step 1, not a palindrome
// 165 +  561 =  726     - step 2, not a palindrome
// 726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
