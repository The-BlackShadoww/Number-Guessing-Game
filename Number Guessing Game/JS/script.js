

//! <<<<<<<<<< Global Variables >>>>>>>>>>> 


//* <<<<<<<<<< UI elements >>>>>>>>>>> 


let gamingForm = document.querySelector('#gamingPart');


let gammerInput = document.querySelector('#gamerInput');


let restartBtn = document.querySelector('#restart');


let chances = document.querySelector('#chances');


let messageField = document.querySelector('#messageField');


let hiddenNum = document.querySelector('#hddCircleNum');


//* <<<<<<<<<< global variables for numbers >>>>>>>>>>> 


let miniNum = 1;


let maxNum = 10;


let randomHiddenNum = Math.floor(Math.random() * (maxNum - miniNum) + miniNum);


let attempts = 0;



//! <<<<<<<<<< Event Listeners >>>>>>>>>>> 


gamingForm.addEventListener('submit', theGame);


restartBtn.addEventListener('click', restartGame);


document.addEventListener('DOMContentLoaded', hideNumber);



//! <<<<<<<<<< Functions >>>>>>>>>>> 


//todo <<< --- theGame() function is for placing and hiding the random number generated in randomHiddenNum variable when the page is loaded --- >>>


function hideNumber() {


    hiddenNum.innerHTML = randomHiddenNum;


    hiddenNum.style.visibility = 'hidden';

}


//todo <<< --- theGame() function is for the actual game, it will show the hints and win or lose and the chances of guessing. It is called in gamingForm as a submit eventListener --- >>>


function theGame(e) {

    e.preventDefault();
    

    let guess = parseInt(gammerInput.value);
    
    
    if(isNaN(guess) || guess < 1 || guess > 10) {

        
        messageField.innerHTML = `<h3>Put a number between 1 to 10</h3>`;

        
    } else {


        attempts++;


        if (guess === randomHiddenNum) {


            messageField.innerHTML = `<h3>Great You Win !!!</h3>`;


            hiddenNum.style.visibility = 'visible';


            gammerInput.disabled = true;


        } else if (guess < randomHiddenNum) {


            messageField.innerHTML = `<h3>The number is more than ${guess}</h3>`;


        } else {


            messageField.innerHTML = `<h3>The number is less than ${guess}</h3>`;


        }


    }


    if (attempts === 3 && guess !== randomHiddenNum) {


        messageField.innerHTML = `<h3>Game Over You lost!</h3>`;


        hiddenNum.style.visibility = 'visible';


        gammerInput.disabled = true;


    }

    
    gammerInput.value = '';


    if (attempts == 1) {


        chances.innerText = '2';


    } else if (attempts == 2) {


        chances.innerText = '1';


    } else {


        chances.innerText = '0';


    } 


}


//todo <<< --- restartGame() function is for restarting the game and it is called in restartBtn as eventListener --- >>>


function restartGame() {

    
    hideNumber();


    attempts = 0;


    randomHiddenNum = Math.floor(Math.random() * (maxNum - miniNum) + miniNum);


    hiddenNum.innerHTML = randomHiddenNum;


    gammerInput.disabled = false;


    messageField.innerHTML = '';


    gammerInput.value = '';


    chances.innerText = '3';


}





