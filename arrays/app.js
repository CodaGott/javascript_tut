// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const moreNumbers = new Array(5); // when we have a single number
// //like in this case,  this creates and assigns a length
// //of the specified number to the array.
// console.log(moreNumbers);

// const moreNumbers2 = Array(5); // This is same as the one above.

// const yetMoreNumbers = Array.of(1);
// console.log(yetMoreNumbers);

// const arrayFrom = Array.from('HELLO'); // This creates an array from iterable objects
// // like NodeList and String
// console.log(arrayFrom);

// const hobbies = ['Cooking', 'Sprots'];

// const personalInfo = [
//   31,
//   'Dozie',
//   { moreDetails: ['Book reader', 'Programmer'] },
// ];
// console.log(personalInfo);
// console.log();

// for (const item of personalInfo) {
//   console.log(item);
// }

// const analyticsData = [
//   [1, 2, 4],
//   [4, 5, 58],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); // Adds Item to the last index
// console.log(hobbies);
// hobbies.unshift('Coding'); // Adds Item to the first index
// console.log(hobbies);
// hobbies.pop(); // Removes Item from the last index
// console.log(hobbies);
// hobbies.shift(); // Removes Item from the first index
// console.log(hobbies);

// // hobbies[1] = 'coding';
// console.log(hobbies);

// hobbies.splice(0, 0, 'Good food', 'Good Woman');
// console.log(hobbies);
// hobbies.splice(1, 1);
// console.log(hobbies);

// const testResult = [1, 5.3, 1.5, 10.99, -5, 10];
// console.log(testResult.slice());

// const storedResult = testResult.slice(); // How to copy array safely, so when you make changes to one it doesn't affect the other.
// testResult.push(99.99);
// console.log(testResult);
// console.log(storedResult);
// const storedPartResult = testResult.slice(0, 2); // How to copy array safely, so when you make changes to one it doesn't affect the other.
// console.log(storedPartResult);

// const storedResults = testResult.concat([4, 5, 6, 26, 7, 42]);
// console.log(storedResults.includes(5))

// console.log(storedResults.sort());
// console.log(storedResults.length);

// const personalData = [{ name: 'Emma' }, { name: 'Goddy' }];

// const emma = personalData.find((person, index, persons) => {
//   return person.name === 'Emma';
// });

// console.log(emma);

// const goddyIndex = personalData.findIndex((person, index, persons) => {
//   return person.name === 'Goddy';
// });
// console.log(goddyIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrice = [];

// // for (const price of prices) {
// //   taxAdjustedPrice.push(price * (1 + tax));
// // }

// prices.forEach((price, index, prices) => {
//   const priceObject = { index: index, taxAdjustedPrice: price * (1 + tax) };
//   taxAdjustedPrice.push(priceObject);
// });

// console.log(taxAdjustedPrice);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// // const taxAdjustedPrice = [];

// // for (const price of prices) {
// //   taxAdjustedPrice.push(price * (1 + tax));
// // }

// const taxAdjustedPrice = prices.map((price, index, prices) => {
//   const priceObject = { index: index, taxAdjustedPrice: price * (1 + tax) };
//   //   taxAdjustedPrice.push(priceObject);
//   return priceObject;
// });

// console.log(taxAdjustedPrice);
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price;
// // });

// const sum = prices.reduce((preValue, curValue) => {
//   return preValue + curValue;
// }, 0);
// console.log('sum => ', Math.floor(sum));

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');

// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragment = [...nameFragments];
// console.log(copiedNameFragment);

// const minimum = Math.min(...prices);

// console.log(minimum);

// const persons = [
//   { name: 'Dozie', age: 31 },
//   { name: 'Emma', age: 40 },
// ];

// const copiedPerson = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];

// persons.push({ name: 'Anna', age: 29 });

const nameData = ['Max', 'Schwarz', 'Mr', 80];
const [firstName, lastName, ...otherInformation] = nameData;

console.log(firstName, lastName, otherInformation);
