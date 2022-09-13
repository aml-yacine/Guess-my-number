'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// to print result message of guess
const showMsg = function (message) {
  document.querySelector('.startMsg').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMsg('⛔ No Number ');
  } else if (guess === secretNumber) {
    showMsg('🎉 Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '15rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMsg(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      showMsg('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  showMsg('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
