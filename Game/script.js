const mineSweeper = document.getElementById('mineSweeper');
const rows = 10;
const cols = 10;
let flagNumber = 0;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const square = document.createElement('div');
    square.className = 'square';
    mineSweeper.appendChild(square);

    let isFlagged = false;

    square.addEventListener('click', () => {
      if (!isFlagged) {
        if (min === 0 && sec === 0){
          startTimer();
          startScore();
        }
        const randomNumber = Math.floor(Math.random() * 4 + 1);
        square.textContent = randomNumber;
      }
    });

    square.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (!isFlagged && flagNumber < 10) {
        square.textContent = '🚩';
        flagNumber++;
        isFlagged = true;
      } else if (isFlagged) {
        square.textContent = '';
        flagNumber--;
        isFlagged = false;
      }
    });
  }
}

//Time and Score

var sec = 0;
var min = 0;
var gameTimeElement = document.getElementById('gameTime');
var startClick;

function twoZero(zero) {
  if (zero < 10) {
    return '0' + zero;
  } else {
    return zero;
  }
}

function startTimer() {
  gameTimeElement.innerHTML = 'Tempo: 00:00';
  startClick = setInterval(seconds, 1000);
}

function seconds() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  gameTimeElement.innerHTML = 'Tempo: ' + twoZero(min) + ':' + twoZero(sec);
}

var score = 0;
var gameScoreElement = document.getElementById('gameScore');

function startScore() {
  gameScoreElement.innerHTML = 'Pontos: 000';
  startClick = setInterval(incrementScore, 1000);
}

function incrementScore() {
  score++;
  gameScoreElement.innerHTML = 'Pontos: ' + theZeros(score, 3);
}

function theZeros(number, length) {
  var numberScore = String(number);
  while (numberScore.length < length) {
    numberScore = '0' + numberScore;
  }
  return numberScore;
}

///

