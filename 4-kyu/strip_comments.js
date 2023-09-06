// https://www.codewars.com/kata/51c8e37cee245da6b40000bd
function solution(input, markers) {
  const lines = input.split('\n');

  for (let i = 0; i < lines.length; i++) {
    let sentence = lines[i];
    let minIdx = Infinity;
    markers.forEach((marker) => {
      let idxMarker = sentence.indexOf(marker);
      if (idxMarker !== -1 && idxMarker < minIdx) minIdx = idxMarker;
    });

    lines[i] = sentence.substring(0, minIdx).trim();
  }
  return lines.join('\n');
}

let result = solution('apples, pears # and bananas\ngrapes\nbananas !apples', [
  '#',
  '!',
]);
console.log(result);
// result should == "apples, pears\ngrapes\nbananas
