const button = document.querySelector('button');

// button.onclick = function(){

// }

const buttonClickHandler = (event) => {
  console.log(event);
};

// const anitherButton = () =>{

// }

// button.onclick = buttonClickHandler;
// button.onclick = buttonClickHandler;

setTimeout(() => {
  button.removeEventListener('click', buttonClickHandler);
}, 100000);
button.addEventListener('click', buttonClickHandler);
