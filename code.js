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
const squareRoot = document.getElementById('square-root');
const power = document.getElementById('power');
const neg = document.getElementById('neg');
const equals = document.getElementById('equals');
const decimal = document.getElementById('point');
const del = document.getElementById('delete');
const allClear = document.getElementById('all-clear');

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
    },
    squareRoot: {
        active: false,
        symbol: 'n/a'
    },
    power: {
        active: false,
        symbol: '^'
    }
}

let firstNumber = "";
let firstNumberComplete = false;

let answer = "";
let answerActive = false;

let secondNumber = "";

let screenPrevious = "";
let screenCurrent = "";

let sqrtAllow = false;

let negAllow = false;
let negFirst = false;
let negSecond = false;

//Numbers
numbers.forEach(num => num.addEventListener('click', numberClick));

function numberClick(e) {
    if (operations.equals.active || operations.squareRoot.active) {
        screenCurrent = e.target.textContent;
        screen.textContent = screenCurrent;
        firstNumber = e.target.textContent;
        firstNumberComplete = false;
        operations.equals.active = false;
        operations.squareRoot.active = false;
        secondNumber = ""
        sqrtAllow = true;

        negAllow = true;
        negFirst = true;
        negSecond = false;

    }else if (!firstNumberComplete) {
        screenCurrent += e.target.textContent;
        screen.textContent = screenCurrent;
        firstNumber += e.target.textContent;
        sqrtAllow = true;

        negAllow = true;
        negFirst = true;
        negSecond = false;
    } else {
        screenCurrent += e.target.textContent;
        screen.textContent = screenCurrent;
        secondNumber += e.target.textContent;
        sqrtAllow = false;

        negAllow = true;
        negFirst = false;
        negSecond = true;
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

    sqrtAllow = false;
    operations.squareRoot.active = false;

    if (operations.equals.active) {
        negAllow = false;
        negFirst = false;
        negSecond = false;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans + ";
        screen.textContent = screenCurrent;
        operations.add.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " + ";
        screen.textContent = screenCurrent;
        operations.add.active = true;
        firstNumberComplete = true;
    } else {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        calculate(e);
        screenCurrent = "Ans + ";
        screen.textContent = screenCurrent;
        operations.add.active = true;
    }
}

//Subtract
subtract.addEventListener('click', subtractClick);

function subtractClick(e) {

    sqrtAllow = false;
    operations.squareRoot.active = false;

    if (operations.equals.active) {
        negAllow = false;
        negFirst = false;
        negSecond = false;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans - ";
        screen.textContent = screenCurrent;
        operations.subtract.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " - ";
        screen.textContent = screenCurrent;
        operations.subtract.active = true;
        firstNumberComplete = true;
    } else {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        calculate(e);
        screenCurrent = "Ans - ";
        screen.textContent = screenCurrent;
        operations.subtract.active = true;
    }
}

//Multiply
multiply.addEventListener('click', multiplyClick);

function multiplyClick(e) {

    sqrtAllow = false;
    operations.squareRoot.active = false;

    if (operations.equals.active) {
        negAllow = false;
        negFirst = false;
        negSecond = false;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans x ";
        screen.textContent = screenCurrent;
        operations.multiply.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " x ";
        screen.textContent = screenCurrent;
        operations.multiply.active = true;
        firstNumberComplete = true;
    } else {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        calculate(e);
        screenCurrent = "Ans x ";
        screen.textContent = screenCurrent;
        operations.multiply.active = true;
    }
}

//Divide
divide.addEventListener('click', divideClick);

function divideClick(e) {

    sqrtAllow = false;
    operations.squareRoot.active = false;

    if (operations.equals.active) {
        negAllow = false;
        negFirst = false;
        negSecond = false;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans / ";
        screen.textContent = screenCurrent;
        operations.divide.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " / ";
        screen.textContent = screenCurrent;
        operations.divide.active = true;
        firstNumberComplete = true;
    } else {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        calculate(e);
        screenCurrent = "Ans / ";
        screen.textContent = screenCurrent;
        operations.divide.active = true;
    }
}

//Power
power.addEventListener('click', powerClick);

function powerClick(e) {

    sqrtAllow = false;
    operations.squareRoot.active = false;

    if (operations.equals.active) {
        negAllow = false;
        negFirst = false;
        negSecond = false;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent = "Ans ^ ";
        screen.textContent = screenCurrent;
        operations.power.active = true;
        secondNumber = "";
    } else if ((firstNumber.length > 0) && !firstNumberComplete) {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        for (op in operations) {
            operations[op].active = false;
        }
        screenCurrent += " ^ ";
        screen.textContent = screenCurrent;
        operations.power.active = true;
        firstNumberComplete = true;
    } else {
        negAllow = true;
        negFirst = false;
        negSecond = true;
        calculate(e);
        screenCurrent = "Ans ^ ";
        screen.textContent = screenCurrent;
        operations.power.active = true;
    }
}

// Square Root
squareRoot.addEventListener('click', squareRootClick);

function squareRootClick(c) {
    if (sqrtAllow) {
        answer = Math.sqrt(parseFloat(firstNumber)).toFixed(14);
        if (answer.includes(".")) {
            while (answer.charAt(answer.length - 1) === "0") {
                answer = answer.slice(0, -1);
            }
            if (answer.charAt(answer.length - 1) === ".") {
                answer = answer.slice(0, -1);
            }
        }

        answerActive = true;
        firstNumber = answer;
        firstNumberComplete = true;
        screenCurrent = firstNumber;
        screen.textContent = screenCurrent;
        screenPrevious = `Ans = ${firstNumber}`;
        littleScreen.textContent = screenPrevious;
        secondNumber = "";
        operations.squareRoot.active = true;

        negAllow = false;
        negFirst = false;
        negSecond = false;
    }
    
}

//Neg
neg.addEventListener('click', negClick);

function negClick(e) {
    if (negAllow) {
        if (negFirst) {
            if (firstNumber[0] === "-") {
                firstNumber = firstNumber.substring(1);
                screenCurrent = firstNumber;
                screen.textContent = screenCurrent;
            }
            else {
                firstNumber = "-".concat(firstNumber);
                screenCurrent = firstNumber;
                screen.textContent = screenCurrent;
            }
        } else if (negSecond) {
            let numberPos = screenCurrent.lastIndexOf(secondNumber);
            if (secondNumber[0] === "(") {
                screenCurrent = screenCurrent.slice(0, numberPos);
                secondNumber = secondNumber.substring(2);
                secondNumber = secondNumber.slice(0, -1); 
                screenCurrent = screenCurrent.concat(secondNumber);
                screen.textContent = screenCurrent;
            }
            else {
                screenCurrent = screenCurrent.slice(0, numberPos);
                secondNumber = "(-".concat(secondNumber, ")");
                screenCurrent = screenCurrent.concat(secondNumber);
                screen.textContent = screenCurrent;
            }
        }
    }
}

//Equals
equals.addEventListener('click', equalsClick);

function equalsClick(e) {
    
    if (operations.squareRoot.active) {
        squareRootClick(e);
        return;
    }
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
        sqrtAllow = true;
    }

    negAllow = false;
    negFirst = false;
    negSecond = false;
}

function calculate(e) {
    if (secondNumber[0] === "(") {
        secondNumber = secondNumber.substring(1);
        secondNumber = secondNumber.slice(0, -1); 
    }
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
    } else if (operations.power.active) {
        if (firstNumber.includes(".") || secondNumber.includes(".")) {
            answer = (parseFloat(firstNumber) ** parseFloat(secondNumber)).toFixed(14);
            if (answer.includes(".")) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) ** parseInt(secondNumber)).toString();
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
        operations.power.active = false;
    }
}

//All Clear
allClear.addEventListener('click', allClearClick);

function allClearClick(e) {
    for (op in operations) {
        operations[op].active = false;
    }
    firstNumber = "";
    firstNumberComplete = false;

    answer = "";
    answerActive = false;

    secondNumber = "";

    littleScreen.textContent = "Single operations only -- Use keyboard or mouse";
    screenPrevious = "";

    screen.textContent = "0";
    screenCurrent = "";    
    sqrtAllow = false;

    negAllow = true;
    negFirst = true;
    negSecond = false;
}
