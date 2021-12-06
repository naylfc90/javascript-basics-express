const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  return a && b;
};

const either = (a, b) => {
  // your code here
  return a || b;
};

const none = (a, b) => {
  // your code here
  if (a === false && b === false) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  // your code here
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  }
  return false;
};

const truthiness = a => {
  // your code here
  // return the opposite, opposite of 'a'
  return !!a;
};

const isEqual = (a, b) => {
  // your code here
  return a === b;
};

const isGreaterThan = (a, b) => {
  // your code here
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  return a <= b;
};

const isOdd = a => {
  // your code here
  return a % 2 > 0;
};

const isEven = a => {
  // your code here
  return a % 2 === 0;
};

const isSquare = a => {
  // your code here
  const checkSquare = Math.sqrt(a) % 1 === 0;
  return checkSquare;
};

const startsWith = (char, string) => {
  // your code here
  return char === string.charAt(0);
};

const containsVowels = string => {
  // your code here
  // created vowels array, checked string letters in for loop to see if it is included in vowels array
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let x = 0; x < string.length; x++) {
    if (vowels.includes(string[x].toLowerCase())) {
      return true;
    }
  }
  return false;
};

const isLowerCase = string => {
  // your code here
  return string.charAt(0) === string.charAt(0).toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
