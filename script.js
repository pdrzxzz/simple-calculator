let firstValue = ""
let secondValue = ""
let operator = ""
let valueToggle = false

function one() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "1";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "1";
            document.querySelector(".visor").textContent = firstValue
        }

}

function two() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "2";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "2";
            document.querySelector(".visor").textContent = firstValue
        }

}

function three() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "3";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "3";
            document.querySelector(".visor").textContent = firstValue
        }

}

function four() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "4";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "4";
            document.querySelector(".visor").textContent = firstValue
        }

}

function five() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "5";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "5";
            document.querySelector(".visor").textContent = firstValue
        }

}

function six() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "6";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "6";
            document.querySelector(".visor").textContent = firstValue
        }

}

function seven() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "7";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "7";
            document.querySelector(".visor").textContent = firstValue
        }

}

function eight() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "8";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "8";
            document.querySelector(".visor").textContent = firstValue
        }

}

function nine() {
        if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "9";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "9";
            document.querySelector(".visor").textContent = firstValue
        }

}

function zero() {
        if (Number(firstValue) === 0 && valueToggle === false) {
            null;
        }
        else if (Number(secondValue) === 0 && valueToggle === true) {
            null;
        }
        else if (valueToggle === true && secondValue.length <= 10) {
            secondValue += "0";
            document.querySelector(".visor").textContent = secondValue
        }
        else if (firstValue.length <= 10 && valueToggle === false) {
            firstValue += "0";
            document.querySelector(".visor").textContent = firstValue
        }
}

function sum() {
    if (secondValue != "" && Number(secondValue) > 0 && valueToggle === true) {
        result()
    }
    valueToggle = true;
    operator = "+";
}

function subtract() {
    if (secondValue != "" && Number(secondValue) > 0 && valueToggle === true) {
        result()
    }
    operator = "-";
    valueToggle = true;
}

function multiply() {
    if (secondValue != "" && Number(secondValue) > 0 && valueToggle === true) {
        result()
    }
    operator = "*";
    valueToggle = true;
}

function divide() {
    if (secondValue != "" && Number(secondValue) > 0 && valueToggle === true) {
        result()
    }
    operator = "/";
    valueToggle = true;
}

let resulting = 0
function result() {
    // realizando nova operação:
    if (firstValue.length != 0 && secondValue.length != 0) {
        if (operator === "+") {
            resulting = Number(firstValue) + Number(secondValue);
        }
        else if (operator === "-") {
            resulting = Number(firstValue) - Number(secondValue);
        }
        else if (operator === "*") {
            resulting = Number(firstValue) * Number(secondValue);
        }
        else if (operator === "/") {
            resulting = Number(firstValue) / Number(secondValue);
        }
        document.querySelector(".visor").textContent = resulting;
        resulting = String(resulting)
        if (resulting.includes("e")) {
                document.querySelector(".visor").textContent = resulting.substring(0, 7) + resulting.substring(resulting.length - 4, resulting.length);
            }
        else {
                document.querySelector(".visor").textContent = resulting.substring(0, 11)
            }
            firstValue = (resulting);
        reservedsecondValue = secondValue;
        secondValue = "";
        valueToggle = false;
    }
    // repetindo operação passada:
    else if (firstValue.length != 0 && secondValue.length === 0 && operator != "") {
        if (operator === "+") {
            resulting = Number(firstValue) + Number(reservedsecondValue);
        }
        else if (operator === "-") {
            resulting = Number(firstValue) - Number(reservedsecondValue);
        }
        else if (operator === "*") {
            resulting = Number(firstValue) * Number(reservedsecondValue);
        }
        else if (operator === "/") {
            resulting = Number(firstValue) / Number(reservedsecondValue);
        }
        if (resulting.includes("e")) {
            document.querySelector(".visor").textContent = resulting.substring(0, 7) + resulting.substring(resulting.length - 4, resulting.length);
        }
    else {
            document.querySelector(".visor").textContent = resulting.substring(0, 11)
        }
        firstValue = (resulting);
        secondValue = "";
        valueToggle = false;
    }
}

function erase() {
    if (firstValue.length > 1 && valueToggle === false) {
        firstValue = firstValue.substring(0, firstValue.length-1);
        document.querySelector(".visor").textContent = firstValue;
    }
    else if (firstValue.length === 1 && valueToggle === false) {
        firstValue = firstValue.substring(0, firstValue.length-1);
        document.querySelector(".visor").textContent = "0";
    }
    else if (secondValue.length > 1 && valueToggle === true) {
        secondValue = secondValue.substring(0, secondValue.length-1)
        document.querySelector(".visor").textContent = secondValue;
    }
    else if (secondValue.length === 1 && valueToggle === true) {
        secondValue = secondValue.substring(0, secondValue.length-1)
        document.querySelector(".visor").textContent = "0";
    }
}

function eraseall() {
        document.querySelector(".visor").textContent = "0";
        firstValue = "";
        secondValue = "";
        valueToggle = false;
}