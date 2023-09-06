//https://www.codewars.com/kata/52742f58faf5485cae000b9a

const Periods = {
  now: 'now',
  seconds: 'second',
  minutes: 'minute',
  hours: 'hour',
  days: 'day',
  years: 'year',
};
function formatDuration(seconds) {
  if (seconds === 0) return Periods.now;
  if (seconds < 60) {
    return formatPlural(seconds, Periods.seconds);
  }

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  let hours = 0;
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }
  let days = 0;
  if (hours >= 24) {
    days = Math.floor(hours / 24);
    hours %= 24;
  }
  let years = 0;
  if (days >= 24) {
    years = Math.floor(days / 365);
    days %= 365;
  }
  return formatPunctuation(years, days, hours, minutes, seconds);
}

const formatPunctuation = (years, days, hours, minutes, seconds) => {
  const secondsObj = {
    num: seconds,
    isZero: seconds === 0,
    numAfterNonZeros: 0,
    index: 0,
  };

  const minutesObj = {
    num: minutes,
    isZero: minutes === 0,
    numAfterNonZeros: secondsObj.isZero ? 0 : 1,
    index: 1,
  };
  const hoursObj = {
    num: hours,
    isZero: hours === 0,
    numAfterNonZeros:
      minutesObj.isZero && minutesObj.numAfterNonZeros === 0
        ? 0
        : minutesObj.numAfterNonZeros + 1,
    index: 2,
  };
  const daysObj = {
    num: days,
    isZero: days === 0,
    numAfterNonZeros:
      hoursObj.isZero && hoursObj.numAfterNonZeros === 0
        ? 0
        : hoursObj.numAfterNonZeros + 1,
    index: 3,
  };
  const yearsObj = {
    num: years,
    isZero: years === 0,
    numAfterNonZeros:
      daysObj.isZero && daysObj.numAfterNonZeros === 0
        ? 0
        : daysObj.numAfterNonZeros + 1,
    index: 4,
  };

  return constructOutput(yearsObj, daysObj, hoursObj, minutesObj, secondsObj);
};

const constructOutput = (
  yearsObj,
  daysObj,
  hoursObj,
  minutesObj,
  secondsObj
) => {
  let output = `${constructSentence(
    yearsObj,
    Periods.years
  )}${constructSentence(daysObj, Periods.days)}${constructSentence(
    hoursObj,
    Periods.hours
  )}${constructSentence(minutesObj, Periods.minutes)}${constructSentence(
    secondsObj,
    Periods.seconds
  )}`;

  const idx = output.indexOf(' and ');
  if (output.charAt(idx - 2) === ',' && output.charAt(idx - 1) === ' ') {
    output = output.substring(0, idx - 2) + output.substring(idx);
  }
  return output;
};

const constructSentence = (obj, duration) => {
  if (obj.num === 0 && obj.numAfterNonZeros === 0) return '';
  let plural = formatPlural(obj, duration) || '';

  if (
    (obj.num !== 0 &&
      obj.numAfterNonZeros === 1 &&
      obj.index - obj.numAfterNonZeros > 0) ||
    (obj.numAfterNonZeros === 1 && obj.index - obj.numAfterNonZeros <= 0)
  )
    plural += ' and ';
  if (
    obj.num !== 0 &&
    obj.numAfterNonZeros > 1 &&
    obj.index - obj.numAfterNonZeros >= 0
  )
    plural += ', ';
  return plural;
};

const formatPlural = (obj, period) => {
  if (!obj.hasOwnProperty('num')) {
    obj = { num: obj };
  }
  if (obj.num > 1) {
    return `${obj.num} ${period}s`;
  } else if (obj.num === 1) {
    return `${obj.num} ${period}`;
  }
};

console.log(formatDuration(62) === '1 minute and 2 seconds');
console.log(formatDuration(3662) === '1 hour, 1 minute and 2 seconds');
console.log(formatDuration(120) === '2 minutes');
console.log(formatDuration(3600) === '1 hour');
console.log(
  formatDuration(132030240) === '4 years, 68 days, 3 hours and 4 minutes'
);
console.log(formatDuration(8917236) === '103 days, 5 hours and 36 seconds');
