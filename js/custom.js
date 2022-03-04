"use strict";

// ============Initializing some values===========

let total_attempts = 5;
let attempts = 0;
let wons = 0;
let losts = 0;

// ============Finding Elements===========

const form = document.querySelector("form");
const input = document.getElementById('guessingGame');
const button = document.getElementById("check-btn");
const correctResult = document.querySelector(".required-result");
const gameTime = document.querySelector(".remaining-attempt");
const wons_losts = document.querySelector(".won-lost ");


form.addEventListener('submit', function (event) {

    event.preventDefault();
    checkReult(input.value)

})


const checkReult = value => {
    total_attempts--;

    if (total_attempts == attempts) { // Disable guessing game

        input.disabled = true;
        button.disabled = true;
        button.style.cursor = "default";

    }

    const randomNumber = getRandomNumber(5);

    if (value == randomNumber) {

        wons++;
        correctResult.innerHTML = `You have won!.`

    }
    else {

        losts++;
        correctResult.innerHTML = `You have lost! Random number was : ${randomNumber}`

    }

    gameTime.innerHTML = `Remaining attempts : ${total_attempts}`;
    wons_losts.innerHTML = `Won: ${wons}, Lost : ${losts}`;


}


//====== ====For random number ============

const getRandomNumber = limit => {

    return Math.floor(Math.random() * limit + 1);

}



