const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string/', (req, res) => {
  const str = req.params.string;
  res.status(200).json({ result: sayHello(str) });
});

app.get('/strings/upper/:string', (req, res) => {
  const upper = req.params.string;
  res.status(200).json({ result: uppercase(upper) });
});

app.get('/strings/lower/:string', (req, res) => {
  const lower = req.params.string;
  res.status(200).json({ result: lowercase(lower) });
});

app.get('/strings/first-character/:str', (req, res) => {
  const firstChar = req.params.str;
  res.status(200).json({ result: firstCharacter(firstChar) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const firstChars = req.params.string;
  const q = req.query;
  parseInt(q.length, 10);
  res.status(200).json({ result: firstCharacters(firstChars, q.length) });
});

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  const firstNo = parseInt(req.params.firstNumber, 10);
  const secondNo = parseInt(req.params.secondNumber, 10);
  if (isNaN(firstNo) || isNaN(secondNo)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(firstNo, secondNo) });
  }
});

app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const firstNo = parseInt(req.params.firstNumber, 10);
  const secondNo = parseInt(req.params.secondNumber, 10);
  if (isNaN(firstNo) || isNaN(secondNo)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(secondNo, firstNo) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const query = req.body;
  parseInt(query.a, 10);
  parseInt(query.b, 10);
  if (query.a === undefined || query.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(query.a) || isNaN(query.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(query.a, query.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const query = req.body;
  parseInt(query.a, 10);
  parseInt(query.b, 10);
  if (query.a === undefined || query.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(query.a) || isNaN(query.b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (query.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(query.a, query.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const query = req.body;
  parseInt(query.a, 10);
  parseInt(query.b, 10);
  if (query.a === undefined || query.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(query.a) || isNaN(query.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (query.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(query.a, query.b) });
  }
});

app.post('/booleans/negate', (req, res) => {
  const query = req.body;
  res.status(200).json({ result: negate(query.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const query = req.body;
  res.status(200).json({ result: truthiness(query.value) });
});

app.get('/booleans/is-Odd/:value', (req, res) => {
  const val = req.params.value;
  parseInt(val, 10);
  if (isNaN(val)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(val) });
  }
});

app.get('/booleans/:string/starts-with/:letter', (req, res) => {
  const str = req.params.string;
  const char = req.params.letter;
  if (char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(char, str) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const position = parseInt(req.params.index, 10);
  const query = req.body;
  res.status(200).json({ result: getNthElement(position, query.array) });
});

app.post('/arrays/to-string', (req, res) => {
  const query = req.body;
  res.status(200).json({ result: arrayToCSVString(query.array) });
});

app.post('/arrays/append', (req, res) => {
  const query = req.body;
  res.status(200).json({ result: addToArray(query.value, query.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const query = req.body;
  res.status(200).json({ result: elementsStartingWithAVowel(query.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const query = req.body;
  if (req.query.index !== undefined) {
    res.status(200).json({ result: removeNthElement2(req.query.index, query.array) });
  } else {
    res.status(200).json({ result: removeNthElement2(0, query.array) });
  }
});

module.exports = app;
