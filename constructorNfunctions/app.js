class Person {
  name;
  age;
  hobbies = {};

  constructor() {}

  static greet() {
    console.log(
      `Hi I am ${this.name} and I am ${this.age} old. My hobbies are ${this.hobbies}`
    );
  }
}

const dozie = new Person();
dozie.name = 'Dozie';
dozie.age = 31;
dozie.hobbies = ['Coding ', 'Reading ', 'Watching a movie'];
// dozie.greet();


function NewPerson() {
  this.name;
  this.age;
  this.hobbies = {};
  this.greet = function () {
    console.log(
      `Hi I am ${this.name} and I am ${this.age} old. My hobbies are ${this.hobbies}`
    );
  };
}

const p = new NewPerson();

p.hobbies = ['Coding ', 'Reading ', 'Watching a movie'];
p.age = 31;
p.name = 'Dozie';
p.greet();
console.log(p.__proto__);
