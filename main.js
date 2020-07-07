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

const dNames = function (names) {
  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'D') {
      newNames.push(names[i]);
    }
  }

  return newNames;
}

// Using .startsWith instead of the above index check.
// And for of loop.
const dNamesAlt = function (names) {
  const newNames = [];

  for (const name of names) {
    if (name.startsWith('D')) {
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

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
