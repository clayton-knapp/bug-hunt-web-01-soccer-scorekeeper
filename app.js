// import functions and grab DOM elements
import { renderGame } from './render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.querySelector('#name-form');
const teamOneAddButton = document.querySelector('#team-one-add-button');
const teamTwoAddButton = document.querySelector('#team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');
const finishGameButton = document.getElementById('finish-game-button');

let pastGames = [];
let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(nameForm);
  
    name1 = formData.get('team-one');
    name2 = formData.get('team-two');
    
    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

    displayCurrentGameEl();
    
    nameForm.reset();
    // console.log(name1, name2);
});


teamOneAddButton.addEventListener('click', () => {
    score1++;
    
    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    score2++;

    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    score1--;

    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    score2--;

    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    pastGamesEl.textContent = '';

    const currentGame = { 
        name1, 
        name2, 
        score1, 
        score2, 
    };

    pastGames.push(currentGame);

    displayAllGames();

    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;

    displayCurrentGameEl();
});

function displayCurrentGameEl() {
    currentGameEl.textContent = '';

    const currentGame = {
        name1,
        name2,
        score1,
        score2,
    };

    const gameEl = renderGame(currentGame);
    
    gameEl.classList.add('current');
    currentGameEl.append(gameEl);
}


function displayAllGames() {
    for (let game of pastGames) {
        const gameEl = renderGame(game);

        gameEl.classList.add('past');
        
        pastGamesEl.append(gameEl);
    }
}



displayCurrentGameEl();