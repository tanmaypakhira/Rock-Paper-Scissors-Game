let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


updateScore();

// if (score === null) {  //!score
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };
// }

function playGame(playerMove){
const computerMove = pickComputerMove();

let result = '';

if(playerMove === 'Scissors'){
    if (computerMove === 'Rock'){
        result = 'You lose';
    } else if (computerMove === 'Paper'){
        result = 'You win';
    } else if (computerMove === 'Scissors'){
        result = 'Tie';
    }
}else if(playerMove === 'Paper'){
    if (computerMove === 'Rock'){
        result = 'You win';
    } else if (computerMove === 'Paper'){
        result = 'Tie';
    } else if (computerMove === 'Scissors'){
        result = 'You lose';
    }
}else if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
        result = 'Tie';
    } else if (computerMove === 'Paper'){
        result = 'You lose';
    } else if (computerMove === 'Scissors'){
        result = 'You win';
    }
}

if (result === 'You win'){
    score.wins += 1;
}else if(result === 'You lose'){
    score.losses += 1;
}else if(result === 'Tie'){
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScore();

document.querySelector('.js-result')
.innerHTML = `${result}`;

document.querySelector('.js-moves')
.innerHTML = `You 
    <img src="${playerMove}-emoji.png" class="mini-icons">
    <img src="${computerMove}-emoji.png" class="mini-icons">
    Computer`;

}

function updateScore() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
let computerMove = '';

const randomNumber = Math.random();

if (0 <= randomNumber && randomNumber < 1 / 3){
    computerMove = 'Rock';
} else if (1 / 3 <= randomNumber && randomNumber < 2 / 3) {
    computerMove = 'Paper';
} else if (2 / 3 <= randomNumber && randomNumber < 1) {
    computerMove = 'Scissors';
}
return computerMove;
}