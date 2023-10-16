let counter = 0;
let counterWrapper = document.querySelector('.counter');
let beginned = false;
let time;

const btn1 = document.querySelector("#btn1");

btn1.addEventListener('click', () => {
    ++counter;
    console.log(counter);
    counterWrapper.textContent = counter;
    if(counter===10) { 
        const time = new Date().getTime() - startTime.getTime();
        clearTimeout(timeoutID);
        alert(`Bravo, vous avez réussi à cliquer 10 fois en ${time}ms !`)};
});

btn1.addEventListener("mouseover", startCounting);

let timeoutID;
const delayInSeconds = 5;
const delayInMiliSeconds = delayInSeconds * 1000;

function startCounting() {
    if(!beginned){
        beginned = true;
        startTime = new Date();
        timeoutID = setTimeout(() => {
            alert(`Vous n'avez pas réussi à faire 10 cliques en 5s... Pas terrible`);
            }, delayInMiliSeconds);
    }
};


