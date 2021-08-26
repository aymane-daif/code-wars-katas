// https://www.codewars.com/kata/583203e6eb35d7980400002a/

function countSmileys(arr) {
  let totalSmileys = 0;
  arr.forEach((face) => {
    let faceLen = face.length;
    if (faceLen === 2 || faceLen === 3) {
      if (faceLen === 3) {
        if (
          isValidOrgan(face, ':', ';', 0) &&
          isValidOrgan(face, '-', '~', 1) &&
          isValidOrgan(face, ')', 'D', 2)
        )
          totalSmileys++;
      } else {
        if (isValidOrgan(face, ':', ';', 0) && isValidOrgan(face, ')', 'D', 1))
          totalSmileys++;
      }
    }
  });
  return totalSmileys;
}
function isValidOrgan(face, firstMotif, secondMotif, idx) {
  if (face[idx] === firstMotif || face[idx] === secondMotif) return true;
  return false;
}

console.log(countSmileys([':)', ';(', ';}', ':-D'])); // 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // 1
