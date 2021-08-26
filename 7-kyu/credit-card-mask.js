// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  let maskCc = '';
  const lenCc = cc.length;
  if (lenCc <= 4) return cc;
  for (let i = 0; i < lenCc - 4; i++) {
    maskCc += '#';
  }
  for (let i = lenCc - 4; i < lenCc; i++) {
    maskCc += cc[i];
  }
  return maskCc;
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
