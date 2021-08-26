//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/

function noOdds(values) {
  const output = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) output.push(values[i]);
  }
  return output;
}

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
