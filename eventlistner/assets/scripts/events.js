const button = document.querySelector('button');

// // button.onclick = function(){

// // }

// const buttonClickHandler = (event) => {
//   console.log(event);
// };

// // const anitherButton = () =>{

// // }

// // button.onclick = buttonClickHandler;
// // button.onclick = buttonClickHandler;

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 100000);
// button.addEventListener('click', buttonClickHandler);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', (event) => {
  console.log('CLICKED DIV');
  console.log(event);
});

button.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((listItem) => {
//   listItem.addEventListener('click', (event) => {
//     event.target.classList.toggle('highlight');
//   });
// });

list.addEventListener('click', function (event) {
  //   console.log(event.currentTarget);
  //   event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  //   form.submit();
  button.click();
  console.log(this);
});
