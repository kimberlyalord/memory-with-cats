/*----- constants -----*/



/*----- app's state (variables) -----*/
let tileSequence = [];
let playerSequence = [];
let playerScore = 0;


/*----- cached element references -----*/
const tiles = document.querySelectorAll('.board > div');

const messageEl = document.getElementById('message');


/*----- event listeners -----*/
document.querySelector('.board')
    .addEventListener('click', handleClick);

document.getElementById('start-button').addEventListener('click', initialize);



/*----- functions -----*/
initialize(); 

function initialize() {
    playerSequence = [];
    tileSequence = [];
}

function handleClick(e) {
    // console.log('e.target', e.target.parentNode);
    tiles.forEach(function(tile, index) {
        if (tile === e.target.parentNode)
            playerSequence.push(index);
    });
    // tiles.style.border = 'white'; 
    // console.log(playerSequence);
    render();
}

function render() {
    // console.log(tiles);
}

// test checkForMatch - currently displays wrong message? 
tileSequence = [0, 2, 0];

function checkForMatch() {
    if(playerSequence === tileSequence) {
        messageEl.innerHTML = `Congratulations! Your current score is ${playerSequence.length}. Click Start to play the next sequence.`;
    } else {
        messageEl.innerHTML = `Sorry, you missed it. Your score was ${playerSequence.length - 1}.`;
    }
}