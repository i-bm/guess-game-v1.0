"use strict";
let randomNumber = Math.floor(Math.random() * 20) + 1;

const inputValueChecker = () => {
    if (Number(document.querySelector(".guess").value) > 20) {
        alert("Number can not be more than 20");
        document.querySelector(".guess").value = "";
    }
};

const showMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

const guessedValueChecker = function (e) {
    e.preventDefault();
    const guessedValue = Number(document.querySelector(".guess").value);

    let score = Number(document.querySelector(".score").textContent);
    let highScore = Number(document.querySelector(".highscore").textContent);
    score--;
    document.querySelector(".score").textContent = score;

    //    console.log(randomNumber);
    if (guessedValue < randomNumber) showMessage('Too low!');
    else if (guessedValue > randomNumber) showMessage('Too high!');
    else if (guessedValue === randomNumber) {
        document.querySelector(".number").textContent = guessedValue;
        document.body.style.background = "green";
        showMessage('Correct number!');
        if (highScore === 0) document.querySelector(".highscore").textContent = score;
        else if (score > highScore) document.querySelector(".highscore").textContent = score;
        this.disabled = true;
    }
};

//Reset Game
const resetGame = function (e) {
    e.preventDefault();
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = 20;
    document.body.style.background = "#222";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".check").disabled = false;
};

document.querySelector(".check").addEventListener("click", guessedValueChecker);

document.querySelector(".again").addEventListener("click", resetGame);

(function () {
    document.querySelector(".guess").addEventListener("keyup", inputValueChecker);
})();
