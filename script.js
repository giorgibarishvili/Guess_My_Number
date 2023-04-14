let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check')
.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) { //როდესაც რიცხვი არაა შეყვანილი
        displayMessage('Enter number!');
    } else if (guess === secretNumber) { //როდესაც თამაში მოიგო
        displayMessage('Correct number! 👌');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width= '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) { //რიცხვი არ დაემთხვა
        if (score > 0) {
            displayMessage(guess > secretNumber ? 'Number is too high' : 'Number is too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else { // თამაში წაგებულია
            displayMessage('You lost the game!');
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width= '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
})