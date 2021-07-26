//variables
const variable_num = document.querySelector("#number");
const btn = document.getElementById("btn");
const resultArea = document.querySelector("#result");



console.log("Guess a number from 1 to 100")
const answer = Math.floor((Math.random() * 100) + 1);

const counter = 0;

btn.addEventListener("click", function () {

    if (variable_num.value === answer) {
        resultArea.innerHTML = `You are right. You got it in ${counter} tries.`;
        counter++;
    } else if (variable_num.value < answer) {
        resultArea.innerHTML = `Unsuccessful attempt. Try again. Type a higher number. You tried ${counter} times.`;
        counter++;

    } else if (variable_num.value > answer) {
        resultArea.innerHTML = `Unsuccessful attempt. Try again. Type a lower number. You tried ${counter} times.`;
        counter++;
    };


});