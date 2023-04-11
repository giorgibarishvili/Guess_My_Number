// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number: '
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check')
.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Enter number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number! 👌';
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Number is too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Number is too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    }
})