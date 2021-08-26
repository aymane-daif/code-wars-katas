// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers) {
  const stats = {
    even: [],
    odd: [],
  };
  numbers.split(' ').forEach((num, idx) => {
    if (num % 2 === 0) {
      stats['even'].push({ num, idx });
    } else stats['odd'].push({ num, idx });
  });
  if (stats['even'].length === 1) return stats['even'][0].idx + 1;
  return stats['odd'][0].idx + 1;
}
console.log(iqTest('2 4 7 8 10'));
console.log(iqTest('1 2 1 1'));
//iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

//iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
