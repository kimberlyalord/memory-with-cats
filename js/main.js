/*----- constants -----*/



/*----- app's state (variables) -----*/
let tileSequence = [];
let playerSequence = [];
let playerScore = 0;


/*----- cached element references -----*/
const tiles = Array.from(document.querySelectorAll('.board > div'));

const messageEl = document.getElementById('message');


/*----- event listeners -----*/
document.getElementById('.board > div')
    .addEventListener('click', handleClick);

document.getElementById('start-button').addEventListener('click', initialize);



/*----- functions -----*/
initialize(); 

function initialize() {
    playerSequence = [];
}

function handleClick() {
    console.log('test');
    render();
}

function render() {
    console.log(tiles);
}