// https://www.codewars.com/kata/54da539698b8a2ad76000228/

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  const positions = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };
  walk.forEach((step) => {
    positions[step]++;
  });

  if (positions['n'] === positions['s'] && positions['e'] === positions['w'])
    return true;
  return false;
}

console.log(
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  'should return true'
);
console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
  'should return false'
);
console.log(isValidWalk(['w']), 'should return false');
console.log(
  isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  'should return false'
);
