const cardElement = document.querySelector('#cards');
const sumElement = document.querySelector('#sum');

const randomNumber = function () {
  return Math.floor(Math.random() * (11 - 2) + 2);
};

const cards = [randomNumber(), randomNumber()];
let cardSum = 0;

const renderGame = function () {
  cardElement.textContent = 'Cards: ';
  sumElement.textContent = 'Sum: ';
  for (let i = 0; i < cards.length; i++) {
    cardElement.textContent += ' ' + cards[i];
    cardSum += cards[i];
  }

  sumElement.textContent += cardSum;
};

const startGame = function () {
  document.querySelector('.ingame-buttons').style.display = 'block';
  document.querySelector('#ingame').style.display = 'block';
  document.querySelector('#start-game').style.display = 'none';
  renderGame();
};

document.querySelector('#start-game').addEventListener('click', startGame);
