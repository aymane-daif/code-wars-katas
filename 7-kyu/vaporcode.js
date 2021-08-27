// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/

function vaporcode(str) {
  str = str.trim();
  let output = '';
  let strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    if (str[i] === ' ') continue;
    if (i === strLen - 1) output += `${str[i].toUpperCase()}`;
    else output += `${str[i].toUpperCase()}  `;
  }
  return output;
}

console.log(vaporcode('Lets go to the movies'));
console.log('L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S');
console.log(vaporcode("Why isn't my code working?"));
console.log("W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");
