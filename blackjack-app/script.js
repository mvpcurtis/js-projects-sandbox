const hitBtn = document.querySelector('#hit');
const stayBtn = document.querySelector('#stay');

let cardOne;
let cardTwo;
let sum;

function randomNumer() {
  cardOne = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  console.log(cardOne);
  cardTwo = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  console.log(cardTwo);
}

function startGame() {
  randomNumer();
  sum = cardOne + cardTwo;
  let cardThree;

  if (sum < 21) {
    console.log('What would you like to do?');
    hitBtn.addEventListener('click', function () {
      let cardFour;
      cardThree = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
      sum += cardThree;
      console.log(cardThree, sum);

      if (sum < 21) {
        console.log('What would you like to do now?');
        hitBtn.addEventListener('click', function () {
          cardFour = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
          sum += cardFour;
          console.log(cardFour, sum);
        });

        stayBtn.addEventListener('click', function () {
          console.log('You have stayed with' + ' ' + sum);
        });
      } else if (sum === 21) {
        console.log('Black Jack!');
      } else if (sum > 21) {
        console.log('Bust!');
      }
    });
    stayBtn.addEventListener('click', function () {
      console.log('You have stayed with' + ' ' + sum);
    });
  } else if (sum === 21) {
    console.log('Black Jack!');
  } else if (sum > 21) {
    console.log('Bust!');
  }
}

function clear() {
  document.querySelector('.buttons').style.display = 'block';
  document.querySelector('#start').style.display = 'none';
}

document.querySelector('#start').addEventListener('click', clear);
