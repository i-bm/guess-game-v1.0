'use strict';
const message = document.querySelector('.message').textContent;
const randomNumber = Math.floor(Math.random() * 20) + 1;
// guessedNumber.value = 23;



const guessedValueChecker = function (e) {
    e.preventDefault();
    const gs = Number(document.querySelector('.guess').value);
   document.querySelector('.number').textContent = gs;
 
    // guessedNumber = 23;
    
    console.log(randomNumber);
}

document.querySelector('.check').addEventListener('click',guessedValueChecker);
