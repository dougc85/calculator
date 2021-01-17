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
        screenCurrent = "Ans + ";
        screen.textContent = screenCurrent;
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
        screenCurrent = "Ans - ";
        screen.textContent = screenCurrent;
        subtractActive = true;
    }
}

//Multiply
multiply.addEventListener('click', multiplyClick);

function multiplyClick(e) {
    if ((firstNumber.length > 0) && !firstNumberComplete) {
        screenCurrent += " x ";
        screen.textContent = screenCurrent;
        multiplyActive = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        screenCurrent = "Ans x ";
        screen.textContent = screenCurrent;
        multiplyActive = true;
    }
}

//Divide
divide.addEventListener('click', divideClick);

function divideClick(e) {
    if ((firstNumber.length > 0) && !firstNumberComplete) {
        screenCurrent += " x ";
        screen.textContent = screenCurrent;
        divideActive = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        screenCurrent = "Ans / ";
        screen.textContent = screenCurrent;
        divideActive = true;
    }
}

function calculate(e) {
    if (addActive) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(14);
        } else {
            answer = (parseInt(firstNumber) + parseInt(secondNumber)).toString();
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        addActive = false;
    } else if (subtractActive) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) - parseFloat(secondNumber)).toFixed(14);
        } else {
            answer = (parseInt(firstNumber) - parseInt(secondNumber)).toString();
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        subtractActive = false;
    } else if (multiplyActive) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) * parseFloat(secondNumber)).toFixed(14);
        } else {
            answer = (parseInt(firstNumber) * parseInt(secondNumber)).toString();
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        multiplyActive = false;
    } else if (divideActive) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(14);
        } else {
            answer = (parseInt(firstNumber) / parseInt(secondNumber)).toString();
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        divideActive = false;
    }
}
