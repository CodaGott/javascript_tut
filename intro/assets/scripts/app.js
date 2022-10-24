const defaultResult = 0;
let currentResult = defaultResult;
/* How to create arrays in JS.
    let logEntries = [];
    OR
    let logEntries = {3, 5, 67}
**/
let logEntries = [];

function getUserInput() {
  return userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    currentEntry: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}

function addNums() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  createAndWriteOutput('+', initialResult, enteredNum);
  writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtract() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  createAndWriteOutput('-', initialResult, enteredNum);
  writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createAndWriteOutput('*', initialResult, enteredNum);
  writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createAndWriteOutput('/', initialResult, enteredNum);
  writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', addNums);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
