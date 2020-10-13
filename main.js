/******************
 * YOUR CODE HERE *
 ******************/

// using for of loop
const onlyOdds = function (numbers) {
  const odds = [];

  for (const num of numbers) {
    if (num % 2 === 1) {
      odds.push(num);
    }
  }

  return odds;
}

// using standard for loop
const onlyEvens = function (numbers) {
  const evens = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }

  return evens;
}

const shortNamesOnly = function (names) {
  const shortOnes = [];

  for (const currentName of names) {
    if (currentName.length < 7) {
      shortOnes.push(currentName);
    }
  }

  return shortOnes;
}

const sNames = function (names) {
  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'S') {
      newNames.push(names[i]);
    }
  }

  return newNames;
}

// Using .startsWith instead of the above index check.
// And for of loop.
const sNamesAlt = function (names) {
  const newNames = [];

  for (const name of names) {
    if (name.startsWith('S')) {
      newNames.push(name);
    }
  }

  return newNames;
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
}
