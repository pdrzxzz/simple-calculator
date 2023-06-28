let visorText = ""
let secondVisor = ""
let operator = ""
let visorToggle = false
let resulting = 0

function one() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "1";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "1";
            document.querySelector(".visor").textContent = visorText
        }

}

function two() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "2";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "2";
            document.querySelector(".visor").textContent = visorText
        }

}

function three() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "3";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "3";
            document.querySelector(".visor").textContent = visorText
        }

}

function four() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "4";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "4";
            document.querySelector(".visor").textContent = visorText
        }

}

function five() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "5";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "5";
            document.querySelector(".visor").textContent = visorText
        }

}

function six() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "6";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "6";
            document.querySelector(".visor").textContent = visorText
        }

}

function seven() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "7";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "7";
            document.querySelector(".visor").textContent = visorText
        }

}

function eight() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "8";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "8";
            document.querySelector(".visor").textContent = visorText
        }

}

function nine() {
        if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "9";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "9";
            document.querySelector(".visor").textContent = visorText
        }

}

function zero() {
        if (Number(visorText) === 0 && visorToggle === false) {
            null;
        }
        else if (Number(secondVisor) === 0 && visorToggle === true) {
            null;
        }
        else if (visorToggle === true && secondVisor.length <= 10) {
            secondVisor += "0";
            document.querySelector(".visor").textContent = secondVisor
        }
        else if (visorText.length <= 10 && visorToggle === false) {
            visorText += "0";
            document.querySelector(".visor").textContent = visorText
        }
}

function sum() {
    if (secondVisor != "" && Number(secondVisor) > 0 && visorToggle === true) {
        result()
    }
    visorToggle = true;
    operator = "+";
}

function subtract() {
    if (secondVisor != "" && Number(secondVisor) > 0 && visorToggle === true) {
        result()
    }
    operator = "-";
    visorToggle = true;
}

function multiply() {
    if (secondVisor != "" && Number(secondVisor) > 0 && visorToggle === true) {
        result()
    }
    operator = "*";
    visorToggle = true;
}

function divide() {
    if (secondVisor != "" && Number(secondVisor) > 0 && visorToggle === true) {
        result()
    }
    operator = "/";
    visorToggle = true;
}

function result() {
    // realizando nova operação:
    if (visorText.length != 0 && secondVisor.length != 0) {
        if (operator === "+") {
            resulting = Number(visorText) + Number(secondVisor);
        }
        else if (operator === "-") {
            resulting = Number(visorText) - Number(secondVisor);
        }
        else if (operator === "*") {
            resulting = Number(visorText) * Number(secondVisor);
        }
        else if (operator === "/") {
            resulting = Number(visorText) / Number(secondVisor);
        }
        document.querySelector(".visor").textContent = resulting;
        resulting = String(resulting)
        if (resulting.includes("e")) {
                document.querySelector(".visor").textContent = resulting.substring(0, 7) + resulting.substring(resulting.length - 4, resulting.length);
            }
        else {
                document.querySelector(".visor").textContent = resulting.substring(0, 11)
            }
            visorText = (resulting);
        reservedsecondvisor = secondVisor;
        secondVisor = "";
        visorToggle = false;
    }
    // repetindo operação passada:
    else if (visorText.length != 0 && secondVisor.length === 0 && operator != "") {
        if (operator === "+") {
            resulting = String(Number(visorText) + Number(reservedsecondvisor));
        }
        else if (operator === "-") {
            resulting = String(Number(visorText) - Number(reservedsecondvisor));
        }
        else if (operator === "*") {
            resulting = String(Number(visorText) * Number(reservedsecondvisor));
        }
        else if (operator === "/") {
            resulting = String(Number(visorText) / Number(reservedsecondvisor));
        }
        if (resulting.includes("e")) {
            document.querySelector(".visor").textContent = resulting.substring(0, 7) + resulting.substring(resulting.length - 4, resulting.length);
        }
        else {
            document.querySelector(".visor").textContent = resulting.substring(0, 11)
        }
        visorText = resulting;
    }
}

function erase() {
    if (visorText.length > 1 && visorToggle === false) {
        visorText = visorText.substring(0, visorText.length-1);
        document.querySelector(".visor").textContent = visorText;
    }
    else if (visorText.length === 1 && visorToggle === false) {
        visorText = visorText.substring(0, visorText.length-1);
        document.querySelector(".visor").textContent = "0";
    }
    else if (secondVisor.length > 1 && visorToggle === true) {
        secondVisor = secondVisor.substring(0, secondVisor.length-1)
        document.querySelector(".visor").textContent = secondVisor;
    }
    else if (secondVisor.length === 1 && visorToggle === true) {
        secondVisor = secondVisor.substring(0, secondVisor.length-1)
        document.querySelector(".visor").textContent = "0";
    }
}

function eraseall() {
        document.querySelector(".visor").textContent = "0";
        visorText = "";
        secondVisor = "";
        visorToggle = false;
}
