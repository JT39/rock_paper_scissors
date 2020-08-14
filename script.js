let wins = 0;
let loss = 0;
let tie = 0;
const para = document.getElementById('winner');

const start = document.querySelector('.play');
const buttons = document.querySelectorAll('.game');
const score = document.querySelector('.score');
const container = document.querySelector('.container');
const title = document.querySelector('.title')

function computerPlay() {
    let options = ['rock', 'paper', 'scissor'];
    let choice = (Math.floor(Math.random() * options.length));
    return options[choice];
}

function reset() {
    wins = 0;
    loss = 0;
    tie = 0;

}

function playRound(playSelection, computerSelection) {
    if ((playSelection.toLowerCase() === 'rock') && computerSelection === 'paper') {
        loss++;

    } else if (playSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        wins++;

    } else if (playSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        wins++;

    } else if (playSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        loss++;

    } else if (playSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        loss++;

    } else if (playSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        wins++;

    } else {
        tie++;
    }
}

function playGame(e) {

    if (typeof e.target.alt === 'string' || e.target.className === 'game') {

        para.innerText = '';
        const computerSelection = computerPlay();
        let playSelection = e.target.alt;

        playRound(playSelection, computerSelection);
        score.textContent = `Player Score: ${wins} Computer Score: ${loss} Draws: ${tie}`;

        if (wins === 5) {
            para.innerText = 'Player won';
            reset();
        } else if (loss === 5) {
            para.innerText = 'Computer won';
            reset();
        }

    }

}

buttons.forEach(button => addEventListener('click', (playGame)));
