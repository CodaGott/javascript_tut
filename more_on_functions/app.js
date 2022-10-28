const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let isGameRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ''
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomeValue = Math.random();

  if (randomeValue < 0.34) {
    return ROCK;
  } else if (randomeValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  //   if (cChoice === pChoice) {
  //     return RESULT_DRAW;
  //   } else if (
  //     (cChoice === ROCK && pChoice === PAPER) ||
  //     (cChoice === PAPER && pChoice === SCISSORS) ||
  //     (cChoice === SCISSORS && pChoice === ROCK)
  //   ) {
  //     return RESULT_PLAYER_WINS;
  //   } else {
  //     RESULT_COMPUTER_WINS;
  //   }
};

// startGame();
startGameBtn.addEventListener('click', () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ' won';
  } else {
    message += 'lost';
  }
  alert(winner);
  isGameRunning = false;
});

// anonymous function, is the type of function that
// is stored in a variable and doesn't have the
// traditional name. Example below ==>
// This is also known as Function Expression.

const anonymousFunction = function () {
  console.log('I am an anonymous function');
};
// anonymousFunction();
// const person = {
//   name: 'nameIt',
//   greet: function greet() {
//     console.log('Hello there ', person.name);
//   },
// };
// person.greet();

// Main difference between
// anonymous function and function statement.
// You can call functions statements anywhere
// in your file even before it's defined
// but can't call anonymous function before defining it.

// It's always good to name anonymous functions for
// debug purposes.

// Arrow function. can have an argument/parameters.
// paranthesis can be omitted.
// Curly braces can be ommitted, result is returned
// without the return statement. (This works for just a single expression)
// Curly braces must be used for multiple expressions.
