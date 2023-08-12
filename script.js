'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 150;
// document.querySelector('.highscore').textContent = 1000;
// document.querySelector('.guess').value = 180;
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guess').value);

    // when there is no input
    if (!guessNumber) {
        if (score > 1) {
            displayMessage('⛔ No Number');
            // document.querySelector('.message').textContent = '⛔ No Number';
            score--
            displayScore(score);
            // document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😥 You Lost Game');
            // document.querySelector('.message').textContent = '😥 You Lost Game';
            displayScore(0);
            // document.querySelector('.score').textContent = 0;

        }
        // When player wins
    } else if (guessNumber === secretNumber) {
        displayMessage('🎉 Correct Number');
        // document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // manipulating CSS 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber > secretNumber ? '📈 Too High' : '📉 Too Low');
            // document.querySelector('.message').textContent = guessNumber > secretNumber ? '📈 Too High' : '📉 Too Low';
            score--
            displayScore(score);
            // document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😥 You Lost Game');
            // document.querySelector('.message').textContent = '😥 You Lost Game';
            displayScore(0);
            // document.querySelector('.score').textContent = 0;
        }
    }
    // When the number is too high
    //  else if (guessNumber > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High';
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😥 You Lost Game';
    //         document.querySelector('.score').textContent = 0;

    //     }

    //     // When the number is too Low
    // } else if (guessNumber < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low';
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😥 You Lost Game';
    //         document.querySelector('.score').textContent = 0;

    //     }

    // }
})

// For again button

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;

})
