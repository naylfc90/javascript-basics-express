const getNthElement = (index, array) => {
  // your code here
  if (index >= array.length) {
    const newIndex = index - array.length;
    return array[newIndex];
  }
  return array[index];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  const arr = string.split(',');
  return arr;
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
  return array;
};

const addToArray2 = (element, array) => {
  // your code here
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  // code says at index position, remove 1 item
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  const arr = numbers;
  for (let x = 0; x < arr.length; x += 1) {
    arr.splice(x, 1, arr[x].toString());
  }
  return arr;
};

const uppercaseWordsInArray = strings => {
  // your code here
  for (let x = 0; x < strings.length; x += 1) {
    strings[x] = strings[x].toUpperCase();
  }
  return strings;
};

const reverseWordsInArray = strings => {
  // your code here
  // code is splitting string after each letter, reversing and joining back together
  for (let x = 0; x < strings.length; x += 1) {
    strings[x] = strings[x]
      .split('')
      .reverse()
      .join('');
  }
  return strings;
};

const onlyEven = numbers => {
  // your code here
  // code checks number is divisable by 2
  // if not then it deletes that element
  for (let x = 0; x < numbers.length; x += 1) {
    if (numbers[x] % 2 !== 0) {
      numbers.splice(x, 1);
    }
  }
  return numbers;
};

const removeNthElement2 = (index, array) => {
  // your code here
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  // search is reg exp searching for vowels (not case-sensitive)
  // filtered then tests 'search' to strings array
  const search = /^[aeiou]/i;
  const filtered = strings.filter(vowel => search.test(vowel));
  return filtered;
};

const removeSpaces = string => {
  // your code here
  return string.replace(/\s/g, '');
};

const sumNumbers = numbers => {
  // your code here
  let count = 0;
  for (let x = 0; x < numbers.length; x += 1) {
    count += numbers[x];
  }
  return count;
};

const sortByLastLetter = strings => {
  // your code here
  // iterate through strings arr and reverse
  // sort string array
  // iterate through again and reverse back
  for (let x = 0; x < strings.length; x += 1) {
    strings[x] = strings[x]
      .split('')
      .reverse()
      .join('');
  }
  strings.sort();

  for (let x = 0; x < strings.length; x += 1) {
    strings[x] = strings[x]
      .split('')
      .reverse()
      .join('');
  }

  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
