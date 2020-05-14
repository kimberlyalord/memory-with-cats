/*----- app's state (variables) -----*/
let tileSequence = [];
let playerSequence = [];
let gameOver = 1
let isMatch;


/*----- cached element references -----*/
const tiles = document.querySelectorAll('.board > div');

const messageEl = document.getElementById('message');

const startButton = document.getElementById('start-button');


/*----- event listeners -----*/
document.querySelector('.board')
    .addEventListener('click', handleClick);

document.getElementById('start-button').addEventListener('click', initialize);


/*----- functions -----*/
function initialize() {
    if (gameOver === 1) {
        playerSequence = [];
        tileSequence = [];
        setTileSequence();
    } else if (gameOver === -1) {
        if (isMatch) {
            setTileSequence();
            playerSequence = [];
            isMatch = false;
        }
    }
}

function setTileSequence() {
    let rand = Math.floor(Math.random() * 4);
    tileSequence.push(rand);
    console.log(tileSequence);
    let idx = 0;
    const playTileSequence = setInterval(function() {
        if(tileSequence.length - 1 === idx) {
            clearInterval(playTileSequence)
        }
        if(tileSequence[idx] === 0) {
            document.getElementById('cat-one').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-one').removeAttribute('style')
            }, 600);  
            }
        if(tileSequence[idx] === 1) {
            document.getElementById('cat-two').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-two').removeAttribute('style')
            }, 600);  
            }
        if(tileSequence[idx] === 2) {
            document.getElementById('cat-three').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-three').removeAttribute('style')
            }, 600);  
        }
        if(tileSequence[idx] === 3) {
            document.getElementById('cat-four').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-four').removeAttribute('style')
            }, 600);         
        }
        // try to get this to work to make code dryer
        // tiles.forEach(function(setTimeout {
        //         console.log('test');
        //         this.removeAttribute('style');
        //     }, 2000);
        idx++
    }, 1000);
    gameOver = -1;
}

function handleClick(e) {
    e.target.style.border = 'thick solid white'
    setTimeout(function() {
        e.target.removeAttribute('style')
    }, 500); 
    tiles.forEach(function(tile, index) {
        if (tile === e.target.parentNode)
            playerSequence.push(index);
    });
    if (playerSequence.length > tileSequence.length) 
        alert('stop');
    checkForMatch();
}

function checkForMatch() {
    if(JSON.stringify(playerSequence) === JSON.stringify(tileSequence)) {
        isMatch = true;
        messageEl.innerHTML = `Congratulations! Your current score is ${playerSequence.length}. Click Start to play the next sequence.`;
    } else if(playerSequence.length < tileSequence.length) {
        messageEl.innerHTML = `Press Start to play the game!`;
    } else {
        messageEl.innerHTML = `Sorry, you missed it. Your score was ${playerSequence.length - 1}. Click Start to play a new game.`;
        gameOver = 1;
    } 
}