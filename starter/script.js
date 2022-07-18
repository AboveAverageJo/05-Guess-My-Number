'use strict';

// //document.querySelector('.x').textContent gets the class from the
// //html file to manipulate
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// //puts a value into the input from the website
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//refactor function
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //when there's no input
  if (!guess) {
    //refactoring
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
  }
  //when player wins
  else if (guess === secretNum) {
    //refactored
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNum;
    //bug: body doesn't have a '.' at the beginning
    //document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.backgroundColor = '#60b347';
    //spelled style wrong lol
    //document.querySelector('.number').stlye.width = '30rem';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the player guesses wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      //refactored
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //refactored
      // document.querySelector('.message').textContent = 'You lost';
      displayMessage('You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  //refactored
  // //when player guesses higher
  // else if (guess > secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //when player guesses lower
  // else if (guess < secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // resetting the score back to 20
  document.querySelector('.score').textContent = 20;
  score = 20;
  //resetting the rand num and hiding it again
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  //clear guess input
  document.querySelector('.guess').value = false;
  //resetting the message. Refactored
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //resetting background color
  document.querySelector('body').style.backgroundColor = '#222';
  //resetting the number width to 15rem
  document.querySelector('.number').style.width = '15rem';
});
