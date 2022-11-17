console.log(randomInt(4, 20));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const name = 'Goal';

if (name.endsWith('l')) {
  console.log(name);
}

function productDesc(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(prodPrice);
  let priceCategory = 'cheap';
  if (productPrice > 20) {
    priceCategory = 'fair';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Java Course';
const prodPrice = 29.99;

const productOutput = productDesc`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

const email = /^\S+@\S+\.|S+$/;

let userInput = 'me@yahoo.com';
console.log(regex.test(userInput));

const anotherRegex = /(h|H)ello/
const wildcardRegex = /.ello/