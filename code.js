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

const calculator = document.getElementById('calc-body');

let changed = [];

calculator.addEventListener('mousedown', changeColor);
document.addEventListener('mouseup', changeBack);

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

const nums = ['1','2','3','4','5','6','7','8','9','0'];
const numElements = 
{
    "1":one,
    "2":two,
    "3":three,
    "4":four,
    "5":five,
    "6":six,
    "7":seven,
    "8":eight,
    "9":nine,
    "0":zero
}

function onKeyDown(e) {
    if ((e.key === "a") || (e.key === " ")){
        answerClick(e);
        changeColorKey(answerButton);
    } else if ((e.key === "+") || (e.key === "p")) {
        addClick(e);
        changeColorKey(add);
    } else if ((e.key === "m") || (e.key === "-")) {
        subtractClick(e);
        changeColorKey(subtract);
    } else if ((e.key === "t") || (e.key === "x")) {
        multiplyClick(e);
        changeColorKey(multiply);
    } else if ((e.key === "d") || (e.key === "/")) {
        divideClick(e);
        changeColorKey(divide);
    } else if ((e.key === "n") || (e.key === "~")) {
        negClick(e);
        changeColorKey(neg);
    } else if ((e.key === "^") || (e.key === "e")) {
        powerClick(e);
        changeColorKey(power);
    } else if ((e.key === "√") || (e.key === "r")) {
        squareRootClick(e);
        changeColorKey(squareRoot);
    } else if ((e.key === "Enter") || (e.key === "=")) {
        equalsClick(e);
        changeColorKey(equals);
    } else if (e.key === "Backspace") {
        delClick(e);
        changeColorKey(del);
    } else if (e.key === "Escape") {
        allClearClick(e);
        changeColorKey(allClear);
    } else if (e.key === ".") {
        addDecimal(e);
        changeColorKey(decimal);
    } else if (nums.includes(e.key)) {
        numPress(e.key);
        changeColorKey(numElements[e.key]);
    }
}

function onKeyUp(e) {
    if ((e.key === "a") || (e.key === " ")){
        answerButton.classList.toggle('green-clicked');
    } else if ((e.key === "+") || (e.key === "p")) {
        add.classList.toggle('green-clicked');
    } else if ((e.key === "m") || (e.key === "-")) {
        subtract.classList.toggle('green-clicked');
    } else if ((e.key === "t") || (e.key === "x")) {
        multiply.classList.toggle('green-clicked');
    } else if ((e.key === "d") || (e.key === "/")) {
        divide.classList.toggle('green-clicked');
    } else if ((e.key === "n") || (e.key === "~")) {
        neg.classList.toggle('green-clicked');
    } else if ((e.key === "^") || (e.key === "e")) {
        power.classList.toggle('green-clicked');
    } else if ((e.key === "√") || (e.key === "r")) {
        squareRoot.classList.toggle('green-clicked');
    } else if ((e.key === "Enter") || (e.key === "=")) {
        equals.classList.toggle('yellow-clicked');
    } else if (e.key === "Backspace") {
        del.classList.toggle('red-clicked');
    } else if (e.key === "Escape") {
        allClear.classList.toggle('red-clicked');
    } else if (e.key === ".") {
        decimal.classList.toggle('green-clicked');
    } else if (nums.includes(e.key)) {
        numElements[e.key].classList.toggle('green-clicked');
    }
}

function changeColorKey(element) {
    if (element.classList.contains('green')) {
        element.classList.toggle('green-clicked');
        changed = [element, 'green-clicked'];
    } else if (element.classList.contains('red')) {
        element.classList.toggle('red-clicked');
        changed = [element, 'red-clicked'];
    } else if (element.classList.contains('yellow')) {
        element.classList.toggle('yellow-clicked');
        changed = [element, 'yellow-clicked'];
    } 
}

function changeColor(e) {
    if (e.target.classList.contains('green')) {
        e.target.classList.toggle('green-clicked');
        changed = [e.target, 'green-clicked'];
    } else if (e.target.classList.contains('red')) {
        e.target.classList.toggle('red-clicked');
        changed = [e.target, 'red-clicked'];
    } else if (e.target.classList.contains('yellow')) {
        e.target.classList.toggle('yellow-clicked');
        changed = [e.target, 'yellow-clicked'];
    } else if (e.target.parentNode.classList.contains('green')) {
        e.target.parentNode.classList.toggle('green-clicked');
        changed = [e.target.parentNode, 'green-clicked'];
    } else if (e.target.parentNode.classList.contains('red')) {
        e.target.parentNode.classList.toggle('red-clicked');
        changed = [e.target.parentNode, 'red-clicked'];
    } else if (e.target.parentNode.classList.contains('yellow')) {
        e.target.parentNode.classList.toggle('yellow-clicked');
        changed = [e.target.parentNode, 'yellow-clicked'];
    } 
}

function changeBack(e) {
    if (changed.length === 2) {
        changed[0].classList.toggle(changed[1]);
        changed = [];
    }
}


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

let answerClickedFirst = false;
let answerClickedSecond = false;

//Numbers
numbers.forEach(num => num.addEventListener('click', numberClick));

function numberClick(e) {
    if (answerClickedFirst || answerClickedSecond) {
        return;
    }
    if (operations.equals.active || operations.squareRoot.active) {
        if (screenCurrent.length > 15) {
            return;
        }
        screenCurrent = e.target.textContent;
        screen.textContent = screenCurrent;
        firstNumber = e.target.textContent;
        firstNumberComplete = false;
        for (op in operations) {
            operations[op].active = false;
        }
        secondNumber = ""
        sqrtAllow = true;

        negAllow = true;
        negFirst = true;
        negSecond = false;

    } else if (!firstNumberComplete) {
        if (screenCurrent.length > 15) {
            return;
        }
        if (firstNumber === "0") {
            screenCurrent = e.target.textContent;
            screen.textContent = screenCurrent;
            firstNumber = e.target.textContent;
            sqrtAllow = true;

            negAllow = true;
            negFirst = true;
            negSecond = false;
        } else {
            screenCurrent += e.target.textContent;
            screen.textContent = screenCurrent;
            firstNumber += e.target.textContent;
            sqrtAllow = true;

            negAllow = true;
            negFirst = true;
            negSecond = false;
        }
    } else {
        if (screenCurrent.length > 20) {
            return;
        }
        if (screenCurrent.slice(-1) === ")") {
            screenCurrent = screenCurrent.slice(0, -1).concat(e.target.textContent).concat(")");
            screen.textContent = screenCurrent;
            secondNumber = secondNumber.slice(0, -1).concat(e.target.textContent).concat(")");
        } else {
            if (secondNumber === "0") {
                screenCurrent = screenCurrent.slice(0, -1).concat(e.target.textContent);
                screen.textContent = screenCurrent;
                secondNumber = e.target.textContent;
                sqrtAllow = false;
    
                negAllow = true;
                negFirst = false;
                negSecond = true;
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
    }
}

//Number function for key presses

function numPress(num) {
    if (answerClickedFirst || answerClickedSecond) {
        return;
    }
    if (operations.equals.active || operations.squareRoot.active) {
        if (screenCurrent.length > 15) {
            return;
        }
        screenCurrent = num;
        screen.textContent = screenCurrent;
        firstNumber = num;
        firstNumberComplete = false;
        for (op in operations) {
            operations[op].active = false;
        }
        secondNumber = ""
        sqrtAllow = true;

        negAllow = true;
        negFirst = true;
        negSecond = false;

    } else if (!firstNumberComplete) {
        if (screenCurrent.length > 15) {
            return;
        }
        if (firstNumber === "0") {
            screenCurrent = num;
            screen.textContent = screenCurrent;
            firstNumber = num;
            sqrtAllow = true;

            negAllow = true;
            negFirst = true;
            negSecond = false;
        } else {
            screenCurrent += num;
            screen.textContent = screenCurrent;
            firstNumber += num;
            sqrtAllow = true;

            negAllow = true;
            negFirst = true;
            negSecond = false;
        }
    } else {
        if (screenCurrent.length > 20) {
            return;
        }
        if (screenCurrent.slice(-1) === ")") {
            screenCurrent = screenCurrent.slice(0, -1).concat(num).concat(")");
            screen.textContent = screenCurrent;
            secondNumber = secondNumber.slice(0, -1).concat(num).concat(")");
        } else {
            if (secondNumber === "0") {
                screenCurrent = screenCurrent.slice(0, -1).concat(num);
                screen.textContent = screenCurrent;
                secondNumber = num;
                sqrtAllow = false;
    
                negAllow = true;
                negFirst = false;
                negSecond = true;
            } else {
                screenCurrent += num;
                screen.textContent = screenCurrent;
                secondNumber += num;
                sqrtAllow = false;

                negAllow = true;
                negFirst = false;
                negSecond = true;
            }
        }
    }
}

//Answer helper function
function oneActiveOperation() {
    for (op in operations) {
        if (operations[op].active) {
            return true;
        } else {continue};
    }
    return false;
}
//Answer
answerButton.addEventListener('click', answerClick);

function answerClick(e) {
    if (answerClickedFirst || answerClickedSecond) {
        return;
    }

    if (answerActive) {
        if (operations.equals.active || operations.squareRoot.active || screenCurrent === String.fromCharCode(8203)) {
            screenCurrent = "Ans";
            screen.textContent = screenCurrent;
            firstNumber = answer;
            firstNumberComplete = false;
            answerClickedFirst = true;
            operations.equals.active = false;
            operations.squareRoot.active = false;
            secondNumber = ""
            sqrtAllow = true;
    
            negAllow = true;
            negFirst = true;
            negSecond = false;
        } else if (oneActiveOperation() && (secondNumber.length == 0)) {
            screenCurrent += "Ans";
            screen.textContent = screenCurrent;
            secondNumber = answer;
            answerClickedSecond = true;

            negAllow = true;
            negFirst = false;
            negSecond = true;
        }
    }
}

//Zero
zero.addEventListener('click', zeroClick);

function zeroClick(e) {
    if (answerClickedFirst || answerClickedSecond) {
        return;
    }

    if (((firstNumber === "0") && !firstNumberComplete) || (secondNumber === "0")) {
        return;
    }

    if (operations.equals.active || operations.squareRoot.active) {
        screenCurrent = "0";
        screen.textContent = screenCurrent;
        firstNumber = "0";
        firstNumberComplete = false;
        operations.equals.active = false;
        operations.squareRoot.active = false;
        secondNumber = ""
        sqrtAllow = true;

        negAllow = false;
        negFirst = true;
        negSecond = false;

    } else if (!firstNumberComplete && (firstNumber !== "0")) {
        screenCurrent += "0";
        screen.textContent = screenCurrent;
        firstNumber += "0";
        sqrtAllow = true;
    } else if ((secondNumber.length === 0) && (firstNumber !== "0")) {
        screenCurrent += "0";
        screen.textContent = screenCurrent;
        secondNumber += "0";
        sqrtAllow = false;

        negAllow = false;
        negFirst = false;
        negSecond = true;
    } else {
        screenCurrent += "0";
        screen.textContent = screenCurrent;
        secondNumber += "0"
        sqrtAllow = false;

        negAllow = true;
        negFirst = false;
        negSecond = true;
    }
}

//Decimal

decimal.addEventListener('click', addDecimal);

function addDecimal(e) {
    if (answerClickedFirst || answerClickedSecond) {
        return;
    }

    if (operations.equals.active || operations.squareRoot.active || (firstNumber.length === 0)) {
        screenCurrent = "0."
        screen.textContent = screenCurrent;
        firstNumber = "0."
        firstNumberComplete = false;
        operations.equals.active = false;
        operations.squareRoot.active = false;
        secondNumber = ""
        sqrtAllow = true;

        negAllow = false;
        negFirst = true;
        negSecond = false;
    } else if (!firstNumberComplete && !(firstNumber.search(/\./) === -1)) {
        return
    } else if (!firstNumberComplete) {
        screenCurrent += ".";
        screen.textContent = screenCurrent;
        firstNumber += "."
        sqrtAllow = true;

        negAllow = true;
        negFirst = true;
        negSecond = false;
    } else if (secondNumber.length === 0) {
        screenCurrent += "0.";
        screen.textContent = screenCurrent;
        secondNumber += "0."
        sqrtAllow = false;

        negAllow = true;
        negFirst = false;
        negSecond = true;
    } else if (secondNumber.search(/\./) === -1) {
        screenCurrent += ".";
        screen.textContent = screenCurrent;
        secondNumber += ".";
        sqrtAllow = false;

        negAllow = true;
        negFirst = false;
        negSecond = true;
    }
}


//Addition
add.addEventListener('click', addClick);

function addClick(e) {
    if (screenCurrent.slice(-1) === " ") {
        return;
    }
    if (answerClickedFirst || answerClickedSecond) {
        answerClickedFirst = false;
        answerClickedSecond = false;
    }
    if (firstNumber.length === 0) {
        return;
    }

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
        negAllow = false;
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
        negAllow = false;
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

    if (screenCurrent.slice(-1) === " ") {
        return;
    }

    if (answerClickedFirst || answerClickedSecond) {
        answerClickedFirst = false;
        answerClickedSecond = false;
    }

    if (firstNumber.length === 0) {
        return;
    }

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
        negAllow = false;
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
        negAllow = false;
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

    if (screenCurrent.slice(-1) === " ") {
        return;
    }

    if (answerClickedFirst || answerClickedSecond) {
        answerClickedFirst = false;
        answerClickedSecond = false;
    }

    if (firstNumber.length === 0) {
        return;
    }

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
        negAllow = false;
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
        negAllow = false;
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

    if (screenCurrent.slice(-1) === " ") {
        return;
    }

    if (answerClickedFirst || answerClickedSecond) {
        answerClickedFirst = false;
        answerClickedSecond = false;
    }

    if (firstNumber.length === 0) {
        return;
    }

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
        negAllow = false;
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
        negAllow = false;
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

    if (screenCurrent.slice(-1) === " ") {
        return;
    }

    if (answerClickedFirst || answerClickedSecond) {
        answerClickedFirst = false;
        answerClickedSecond = false;
    }

    if (firstNumber.length === 0) {
        return;
    }

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
        negAllow = false;
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
        negAllow = false;
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

    if (firstNumber.length === 0) {
        return;
    }

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
        answerClickedFirst = false;

        negAllow = false;
        negFirst = false;
        negSecond = false;
    }
    
}

//Neg
neg.addEventListener('click', negClick);

function negClick(e) {

    if (firstNumber.length === 0) {
        return;
    }

    if (negAllow) {
        if (negFirst) {
            if (answerClickedFirst) {
                if (screenCurrent[0] === "-") {
                    firstNumber = (firstNumber * (-1)).toString();
                    screenCurrent = screenCurrent.substring(1);
                    screen.textContent = screenCurrent;
                } else {
                    firstNumber = (firstNumber * (-1)).toString();
                    screenCurrent = "-".concat(screenCurrent);
                    screen.textContent = screenCurrent;
                }
            } else if (firstNumber[0] === "-") {
                firstNumber = firstNumber.substring(1);
                screenCurrent = firstNumber;
                screen.textContent = screenCurrent;
            } else {
                firstNumber = "-".concat(firstNumber);
                screenCurrent = firstNumber;
                screen.textContent = screenCurrent;
            }
        } else if (negSecond) {
            let numberPos = screenCurrent.lastIndexOf(secondNumber);
            if (answerClickedSecond) {
                if (screenCurrent.slice(-6) === "(-Ans)") {
                    secondNumber = (secondNumber * (-1)).toString();
                    screenCurrent = screenCurrent.slice(0, -6).concat("Ans");
                    screen.textContent = screenCurrent;
                } else {
                    secondNumber = (secondNumber * (-1)).toString();
                    screenCurrent = screenCurrent.slice(0, -3).concat("(-Ans)");
                    screen.textContent = screenCurrent;
                }
            } else if (secondNumber[0] === "(") {
                screenCurrent = screenCurrent.slice(0, numberPos);
                secondNumber = secondNumber.substring(2);
                secondNumber = secondNumber.slice(0, -1); 
                screenCurrent = screenCurrent.concat(secondNumber);
                screen.textContent = screenCurrent;
            } else {
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
    if (answerClickedFirst) {
        return;
    }

    answerClickedSecond = false;

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
            if (answer.includes(".") && !(answer.includes("e"))) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) + parseInt(secondNumber)).toString();
            if (answer.includes(".") && !(answer.includes("e"))) {
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
            if (answer.includes(".") && !(answer.includes("e"))) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) - parseInt(secondNumber)).toString();
            if (answer.includes(".") && !(answer.includes("e"))) {
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
            if (answer.includes(".") && !(answer.includes("e"))) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) * parseInt(secondNumber)).toString();
            if (answer.includes(".") && !(answer.includes("e"))) {
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
            if (answer.includes(".") && !(answer.includes("e"))) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) / parseInt(secondNumber)).toString();
            if (answer.includes(".") && !(answer.includes("e"))) {
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
            if (answer.includes(".") && !(answer.includes("e"))) {
                while (answer.charAt(answer.length - 1) === "0") {
                    answer = answer.slice(0, -1);
                }
                if (answer.charAt(answer.length - 1) === ".") {
                    answer = answer.slice(0, -1);
                }
            }
        } else {
            answer = (parseInt(firstNumber) ** parseInt(secondNumber)).toString();
            if (answer.includes(".") && !(answer.includes("e"))) {
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

    answerClickedFirst = false;
    answerClickedSecond = false;
}

//Delete

del.addEventListener('click', delClick);

function delClick(e) {

    if (screenCurrent.slice(-3) === "Ans") {
        if (secondNumber.length !== 0) {
            screenCurrent = screenCurrent.slice(0, -3);
            screen.textContent = screenCurrent;
            secondNumber = "";
            answerClickedSecond = false;

            negAllow = false;
            negFirst = false;
            negSecond = true;
        } else {
            screenCurrent = String.fromCharCode(8203);
            screen.textContent = screenCurrent;
            firstNumber = "";
            firstNumberComplete = false;
            sqrtAllow = false;
            negAllow = false;
            negFirst = false;
            negSecond = false;
            answerClickedFirst = false;
        }
    } else if (screenCurrent.slice(-1) === ")") {
        negClick(e);
    } else if (operations.equals.active || operations.squareRoot.active) {
        screenCurrent = String.fromCharCode(8203);
        screen.textContent = screenCurrent;
        firstNumber = "";
        firstNumberComplete = false;
        sqrtAllow = false;
        negAllow = false;
        negFirst = false;
        negSecond = false;
    } else if (screenCurrent.slice(-1) === " ") {
        screenCurrent = screenCurrent.slice(0, -3)
        screen.textContent = screenCurrent;
        sqrtAllow = true;
        negAllow = true;
        negFirst = true;
        negSecond = false;
        for (op in operations) {
            operations[op].active = false;
        }
        firstNumberComplete = false;
        if ((screenCurrent.length >= 3) && (screenCurrent.slice(-3) === "Ans")) {
            answerClickedFirst = true;
        }
    } else if (screenCurrent.length === 1) {
        screenCurrent = String.fromCharCode(8203);
        screen.textContent = screenCurrent;
        firstNumber = "";
        firstNumberComplete = false;
        sqrtAllow = false;
        negAllow = false;
        negFirst = false;
        negSecond = false;
    } else if (secondNumber.length !== 0) {
        screenCurrent = screenCurrent.slice(0, -1);
        screen.textContent = screenCurrent;
        secondNumber = secondNumber.slice(0, -1);
    } else if (screenCurrent.length === 0){
        return;
    } else if (screenCurrent.slice(0, 2).includes('-')) {
        screenCurrent = screenCurrent.slice(1);
        screen.textContent = screenCurrent;
        firstNumber = (firstNumber * -1).toString();
    } else {
        screenCurrent = screenCurrent.slice(0, -1);
        screen.textContent = screenCurrent;
        firstNumber = firstNumber.slice(0, -1);
    }
}