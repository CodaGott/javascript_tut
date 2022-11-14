class Person {
  name;
  age;
  hobbies = [];

  constructor() {}

  setName(name) {
    this.name = name;
  }

  getname() {
    return this.name;
  }

  greet() {
    console.log(
      `Hi I am ${this.name} and I am ${this.age} old. My hobbies are ${this.hobbies}`
    );
  }
}

const dozie = new Person();
// dozie.name = 'Dozie';
dozie.age = 31;
dozie.hobbies = ['Coding ', 'Reading ', 'Watching a movie'];
dozie.setName('Chidozie');
dozie.name = dozie.getname();
dozie.greet();

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

const course = {
  title: 'Java Script',
  rating: 5,
};
console.log(
  Object.setPrototypeOf(course, {
    printRating: function () {
      console.log(`${this.rating}/5`);
    },
  })
);
course.printRating();
