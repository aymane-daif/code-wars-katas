//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/

function accum(s) {
  s = s.toLowerCase();
  let mumble = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) mumble += s[i].toUpperCase();
      else mumble += s[i];
    }
    if (i !== s.length - 1) mumble += '-';
  }

  return mumble;
}
console.log(accum('abcd'));
console.log('A-Bb-Ccc-Dddd');
console.log(accum('RqaEzty'));
console.log('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
console.log(accum('cwAt'));
console.log('C-Ww-Aaa-Tttt');
