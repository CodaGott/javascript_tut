let person = {
  name: 'Dozie',
  age: 32,
  hobbies: ['Coding', 'Reading', 'Cooking'],
  greet: () => {
    console.log('Hi there!');
  },
};

// person = {
//   name: 'Dozie',
//   age: 32,
//   hobbies: ['Coding', 'Reading', 'Cooking'],
//   greet: () => {
//     console.log('Hi there!');
//   },
//   isAdmin: true,
// };

// This adds a new field to an already existing object.
person.isAdmin = true;
console.log(person);

// This deletes a field from an object.
// If we assign a field the null or undefined
// values, the field properties are still there
// just that a value isn't assigned to it. But with delete
// keyword, we delete everything about the field/property.
delete person.isAdmin;

person.greet();

console.log(person);
