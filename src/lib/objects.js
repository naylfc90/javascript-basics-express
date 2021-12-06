const createPerson = (name, age) => {
  // your code here
  const Person = {
    name,
    age
  };
  return Person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  // built in objects function to see if property exists
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  let ageCheck;
  if (person.age > 65) {
    ageCheck = true;
  } else {
    return false;
  }

  return ageCheck;
};

const getAges = people => {
  // your code here
  const result = people.map(person => person.age);
  return result;
};

const findByName = (name, people) => {
  // your code here
  let obj = people.find(obj => obj.name === name);
  return obj;
};

const findHondas = cars => {
  // your code here
  // returns Honda to result variable and then have to return the variable
  const result = cars.filter(obj => {
    return obj.manufacturer === 'Honda';
  });
  return result;
};

const averageAge = people => {
  // your code here
  // reduce method takes in total sum and next keyword which iterates through ages
  // then takes average by dividing by people.length
  const average =
    people.reduce((total, next) => total + next.age, 0) / people.length;

  return average;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const Person = {
    name,
    age,
    introduce: a => {
      return `Hi ${a}, my name is ${name} and I am ${age}!`;
    }
  };
  return Person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};