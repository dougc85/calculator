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

let operations = {
    add: {
        active: false,
        symbol: '+'
    },
    subtract: {
        active: false,
        symbol: '-'
    },
    multiply: {
        active: false,
        symbol: 'x'
    },
    divide: {
        active: false,
        symbol: '/'
    },
    equals: {
        active: false,
        symbol: '='
    }
}

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
    if (operations.equals.active) {
        screenCurrent = e.target.textContent;
        screen.textContent = screenCurrent;
        firstNumber = e.target.textContent;
        firstNumberComplete = false;
        operations.equals.active = false;
        secondNumber = ""
    }else if (!firstNumberComplete) {
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

    if (operations.equals.active) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans + ";
        screen.textContent = screenCurrent;
        operations.add.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " + ";
        screen.textContent = screenCurrent;
        operations.add.active = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        screenCurrent = "Ans + ";
        screen.textContent = screenCurrent;
        operations.add.active = true;
    }
}

//Subtract
subtract.addEventListener('click', subtractClick);

function subtractClick(e) {
    if (operations.equals.active) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans - ";
        screen.textContent = screenCurrent;
        operations.subtract.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " - ";
        screen.textContent = screenCurrent;
        operations.subtract.active = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        screenCurrent = "Ans - ";
        screen.textContent = screenCurrent;
        operations.subtract.active = true;
    }
}

//Multiply
multiply.addEventListener('click', multiplyClick);

function multiplyClick(e) {
    if (operations.equals.active) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans x ";
        screen.textContent = screenCurrent;
        operations.multiply.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " x ";
        screen.textContent = screenCurrent;
        operations.multiply.active = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        screenCurrent = "Ans x ";
        screen.textContent = screenCurrent;
        operations.multiply.active = true;
    }
}

//Divide
divide.addEventListener('click', divideClick);

function divideClick(e) {
    if (operations.equals.active) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans / ";
        screen.textContent = screenCurrent;
        operations.divide.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " / ";
        screen.textContent = screenCurrent;
        operations.divide.active = true;
        firstNumberComplete = true;
    } else {
        calculate(e);
        screenCurrent = "Ans / ";
        screen.textContent = screenCurrent;
        operations.divide.active = true;
    }
}

//Equals
equals.addEventListener('click', equalsClick);

function equalsClick(e) {
    
    let allOff = true;
    let currentOp = {};

    for (op in operations) {
        if (operations[op].symbol === "=") {
            continue;
        } else if (operations[op].active) {
            allOff = false;
            currentOp = operations[op];
        }
    }
    if (allOff || secondNumber.length === 0) {
        return;
    } else {
        let temp = secondNumber;
        calculate(e);
        screenCurrent = firstNumber;
        screen.textContent = screenCurrent;
        currentOp.active = true;
        secondNumber = temp;
        operations.equals.active = true;
    }
}

function calculate(e) {
    if (operations.add.active) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(14);
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) + parseInt(secondNumber)).toString();
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        operations.add.active = false;
    } else if (operations.subtract.active) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) - parseFloat(secondNumber)).toFixed(14);
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) - parseInt(secondNumber)).toString();
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        operations.subtract.active = false;
    } else if (operations.multiply.active) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) * parseFloat(secondNumber)).toFixed(14);
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) * parseInt(secondNumber)).toString();
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        operations.multiply.active = false;
    } else if (operations.divide.active) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(14);
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) / parseInt(secondNumber)).toString();
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        }
        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        operations.divide.active = false;
    }
}
