const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const numbers = [one, two, three, four, five, six, seven, eight, nine];

const answerButton = document.getElementById('ans');
const clear = document.getElementById('clear');
const power = document.getElementById('power');
const negButton = document.getElementById('neg');
const equals = document.getElementById('equals');
const decimal = document.getElementById('point');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

const screen = document.getElementById('screen');
const littleScreen = document.getElementById('little-screen');

let addActive = false;
let subtractActive = false;
let multiplyActive = false;
let divideActive = false;

let firstNumber = "";
let firstNumberComplete = false;

let answer = "";
let answerActive = false;

let secondNumber = "";

let screenPrevious = "";
let screenCurrent = "";

//Numbers
numbers.forEach(num => num.addEventListener('click', numberClick));

function numberClick(e) {
    if (!firstNumberComplete) {
        screenCurrent += e.target.textContent;
        screen.textContent = screenCurrent;
        firstNumber += e.target.textContent;
    } else {
        screenCurrent += e.target.textContent;
        screen.textContent = screenCurrent;
        secondNumber += e.target.textContent;
    }
}

//Zero
zero.addEventListener('click', zeroClick);

function zeroClick(e) {
    return;
}

//Add
add.addEventListener('click', addClick);

function addClick(e) {
    if ((firstNumber.length > 0) && !firstNumberComplete) {
        screenCurrent += " + ";
        screen.textContent = screenCurrent;
        addActive = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        addActive = true;
    }
}

//Subtract
subtract.addEventListener('click', subtractClick);

function subtractClick(e) {
    if ((firstNumber.length > 0) && !firstNumberComplete) {
        screenCurrent += " - ";
        screen.textContent = screenCurrent;
        subtractActive = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        subtractActive = true;
    }
}


function calculate(e) {
    if (addActive) {
        answer = (parseInt(firstNumber) + parseInt(secondNumber)).toString();
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenCurrent = "Ans + ";
        screen.textContent = screenCurrent;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
    }
}
