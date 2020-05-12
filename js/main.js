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
}

function handleClick(e) {
    console.log('e.target', e.target.parentNode);
    tiles.forEach(function(tile, index) {
        if (tile === e.target.parentNode)
            playerSequence.push(index);
    })
    console.log(playerSequence);
    render();
}

function render() {
    console.log(tiles);
}