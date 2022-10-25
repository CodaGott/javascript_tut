const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 18;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK_VALUE';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    playerHealth: playerHealth,
  };
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      playerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      playerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: event,
      value: value,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      playerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      playerHealth: playerHealth,
    };
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const humanDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= humanDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    dealPlayerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert('You would be dead but the bonus life saved you!');
    setPlayerHealth(initialPlayerHealth);
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
    // reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
    // reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );
    // reset();
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(attackMode) {
  let maxDamage;
  let logEvent;
  if (attackMode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (attackMode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK_VALUE');
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than initial health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function printLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
