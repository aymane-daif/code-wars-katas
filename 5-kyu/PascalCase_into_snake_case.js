//https://www.codewars.com/kata/529b418d533b76924600085d
function toUnderscore(string) {
  string = string.toString();
  let caps = findAllCaps(string);
  if (caps.length === 0) return string;

  return caps
    .reduce((prev, curr, i) => {
      if (i === caps.length - 1) return [...prev, string.substring(curr.index)];
      return [...prev, string.substring(curr.index, caps[i + 1].index)];
    }, [])
    .map(
      (word, idx) =>
        `${idx !== 0 ? '_' : ''}${word.charAt(0).toLowerCase()}${word.substring(
          1
        )}`
    )
    .join('');
}

const findAllCaps = (str) => {
  return str.split('').reduce((prev, curr, i) => {
    if (curr.charCodeAt(0) >= 65 && curr.charCodeAt(0) <= 90)
      return [
        ...prev,
        {
          index: i,
          curr,
        },
      ];
    return prev;
  }, []);
};

console.log(toUnderscore('TestController') === 'test_controller');
console.log(toUnderscore('MoviesAndBooks') === 'movies_and_books');
console.log(toUnderscore('App7Test') === 'app7_test');
console.log(toUnderscore(1) === '1');
