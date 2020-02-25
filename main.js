/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(numbers) {
  const odds = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      odds.push(numbers[i]);
    }
  }

  return odds;
}

function onlyEvens(numbers) {
  const evens = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }

  return evens;
}

function shortNamesOnly(names) {
  const shortOnes = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].length < 7) {
      shortOnes.push(names[i]);
    }
  }

  return shortOnes;
}

function dNames(names) {
  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith('D')) {
      newNames.push(names[i]);
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
