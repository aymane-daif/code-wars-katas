// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  let str = s;
  for (let i = 1; i < n; i++) str += s;

  return str;
}
