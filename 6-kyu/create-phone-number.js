// https://www.codewars.com/kata/525f50e3b73515a6db000b83/

function createPhoneNumber(numbers) {
  let output = '(';
  numbers.forEach((num, idx) => {
    output += num;
    if (idx === 2) output += ') ';
    if (idx === 5) output += '-';
  });

  return output;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
