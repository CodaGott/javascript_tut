const h1 = document.getElementById('main-title');

h1.textContent = 'Dive into the DOM!';
h1.style.color = 'white';
h1.style.backgroundColor = 'Black';

const li = document.querySelector('li:last-of-type');

const listItems = document.getElementsByTagName('li');

for (const list of listItems) {
  console.dir(list);
}

const ul = document.querySelector('section');
const firstLi = ul.firstElementChild.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

const button = document.querySelector('button');

button.addEventListener('click', () => {
  //   if (section.className === 'red-bg visible') {
  //     section.className = 'red-bg invisible';
  //   } else {
  //     section.className = 'red-bg visible';
  //   }

  //   section.classList.toggle('visible');
  section.classList.toggle('invisible');
});
