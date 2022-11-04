// const ids = new Set([1, 2, 3, 4]); // How to create a set
// console.log(ids.has(1));

// for (const item of ids.entries()) {
//   console.log(item[0]);
// }

// MAPS & SETS
// SET = data structure for storing (nested) data of any
// kind and length. It is Iterable and has set methods available.
// Set isn't ordered, does not allow duplicates.
// Index based access isn't allowed.

//MAPS = Store key-value data of any kind and lengt.
// Any key values are allowed.
// It is iterable and also has some special methods in it.
// It is ordered, Keys can't be dublicated, key based access.

// const person1 = { name: 'Chidozie' };
// const person2 = { name: 'Chukwuebuka' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);
// console.log(personData);

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

const person = { name: 'Chidozie' };
const persons = new WeakSet();
persons.add(person);

console.log(persons);
