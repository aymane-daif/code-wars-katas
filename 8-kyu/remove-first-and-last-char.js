//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
  let newstr = '';
  for (let i = 1; i < str.length - 1; i++) newstr += str[i];
  return newstr;
}
