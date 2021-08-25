// https://www.codewars.com/kata/55908aad6620c066bc00002a/

function XO(str) {
  str = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') countX++;
    if (str[i] === 'o') countO++;
  }
  return countX === countO;
}
console.log(XO('ooxx')); //true
console.log(XO('xooxx')); //false
console.log(XO('ooxXm')); //true
console.log(XO('zpzpzpp')); //true when no 'x' and 'o' is present should return true
console.log(XO('zzoo')); //false
