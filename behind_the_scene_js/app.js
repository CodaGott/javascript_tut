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
