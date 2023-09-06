// https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b) {
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;

  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;

  let output = '';
  output += addHeadingZero(r) + addHeadingZero(g) + addHeadingZero(b);

  return output;
}

function addHeadingZero(num) {
  let part = num.toString(16).toUpperCase();
  if (part.length === 1) part = '0' + part;
  return part;
}

console.log(rgb(255, 255, 255), 'FFFFFF');
console.log(rgb(255, 255, 300), 'FFFFFF');
console.log(rgb(0, 0, 0), '000000');
console.log(rgb(148, 0, 211), '9400D3');
