// https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(str) {
  str = str.toLowerCase();
  let strLen = str.length;
  let output = '';
  for (let i = 0; i < strLen; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
      output += `${str.charCodeAt(i) - 96} `;
  }
  return output.trim();
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(
  '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);
