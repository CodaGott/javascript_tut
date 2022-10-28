'use strict';
let name = 'Max';

function greet() {
  let age = 31;
  let name = 'Manuel';
  console.log(name, age);
}

console.log('Outside name ', name);
greet();

// Variables created with VAR, can be used anywhere,
//while variables created with let can only be used
// within it's scope and/or code block.

// HOISTING in JS: The concept, where javascript
// first goes through all the codes and then when
// needed it loads them automatically.

// Primitive Values = Strings, Numbers,
// Booleans, null, undefined, Symbol.
// Copying a variable (assigning to a different variable)
// copies the value. If whe change one, it won't affect the other.
// normally stored on Stack memory(A value of itself).

// Reference Values = Stored on the Heap
// memory(a pointer to the location).
// works with objects mostly.
//When you assign an object to another variable, any change
// in the variable or the original object, affect the other one,
// to avoid this, we use the 3 dot operator.
