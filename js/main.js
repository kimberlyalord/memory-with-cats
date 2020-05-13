/*----- constants -----*/



/*----- app's state (variables) -----*/
let tileSequence = [];
let playerSequence = [];
let playerScore = 0;
let gameOver = -1 //set gameOver to 1 if player loses


/*----- cached element references -----*/
const tiles = document.querySelectorAll('.board > div');

const messageEl = document.getElementById('message');


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
        setTileSequence();
    }
}

//test sequence
// tileSequence = [0, 1, 2, 3];

function setTileSequence() {
    let rand = Math.floor(Math.random() * 4);
    tileSequence.push(rand);
    console.log(tileSequence);
    let idx = 0;
    const playTileSequence = setInterval(function() {
        if(tileSequence.length - 1 === idx) {
            clearInterval(playTileSequence)
        }
        // console.log(tileSequence[idx]);
        if(idx === 0) {
            document.getElementById('cat-one').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-one').removeAttribute('style')
            }, 1000);  
            }
        if(idx === 1) {
            document.getElementById('cat-two').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-two').removeAttribute('style')
            }, 1000);  
            }
        if(idx === 2) {
            document.getElementById('cat-three').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-three').removeAttribute('style')
            }, 1000);  
        }
        if(idx === 3) {
            document.getElementById('cat-four').style
            .border = 'thick solid white';
            setTimeout(function() {
                document.getElementById('cat-four').removeAttribute('style')
            }, 1000);         
        }
        // try to get this to work to make code dryer
        // tiles.forEach(function(setTimeout {
        //         console.log('test');
        //         this.removeAttribute('style');
        //     }, 2000);
        idx++
    }, 1000);
}

function handleClick(e) {
    // console.log('e.target', e.target.parentNode);
    e.target.style.border = 'thick solid white'
    setTimeout(function() {
        e.target.removeAttribute('style')
    }, 1000); 
    tiles.forEach(function(tile, index) {
        if (tile === e.target.parentNode)
            playerSequence.push(index);
    });
    console.log(playerSequence);
    checkForMatch();
}

function checkForMatch() {
    if(JSON.stringify(playerSequence) === JSON.stringify(tileSequence)) {
        messageEl.innerHTML = `Congratulations! Your current score is ${playerSequence.length}. Click Start to play the next sequence.`;
    } else {
        // how to make this not show when the player hasn't clicked yet?
        messageEl.innerHTML = `Sorry, you missed it. Your score was ${playerSequence.length - 1}. Click Start to play a new game.`;
        gameOver = 1;
    }
}