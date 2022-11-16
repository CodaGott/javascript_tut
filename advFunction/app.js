// this is a pure function, it gives same result for a given input without changing anything out of the function.
const add = (num1, num2) => {
  return num1 + num2;
};
const added = add(2, 3);
console.log(added);
// this is an in pure random because it produces different result given an input. Using the in-built randon() function.
function addRandom(num) {
  return num + Math.random();
}

console.log(addRandom(5));

let privousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  privousResult = sum;
  return sum;
}

console.log(addMoreNumbers(2, 3));

const hobbies = ['Sports', 'Cooking'];

function printHobby(h) {
  h.push('New Hobby');
  console.log(h);
}

printHobby(hobbies);

function createTaxCal(amt) {
  function calTax(tax) {
    return amt * tax;
  }
  return calTax;
}
// const vatAmount = calTax(100, 0.19);
// const incomeTax = calTax(100, 0.25);

const calculateVatAmount = createTaxCal(0.19);
const calIncomeTaxAmount = createTaxCal(0.25);

console.log(calculateVatAmount(100));
console.log(calIncomeTaxAmount(100));

// Every function in JS is a closure
let userName = 'Dozie';
function greet() {
  let name = 'Anna';
  console.log('Hi ' + name);
}
let name = 'Work';
userName = 'Chi';
greet();

const powerOf = (x, n) => {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);
};

console.log(powerOf(2, 3));

const loopArr = (arr, n) => {
  if (n === 0) {
    console.log(arr[n]);
    return arr;
  }
  console.log(arr[n]);
  loopArr(arr, n - 1);
};

let arr = [1, 2, 3, 5];
loopArr(arr, 4);

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Person 1',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Harry',
            },
            {
              name: 'Mark',
            },
          ],
        },
      ],
    },
    {
      name: 'CR7',
    },
  ],
};

function printFriendsNames(person) {
  const colectedName = [];

  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    colectedName.push(friend.name);
    colectedName.push(...printFriendsNames(friend));
  }

  return colectedName;
}

console.log(printFriendsNames(myself));
