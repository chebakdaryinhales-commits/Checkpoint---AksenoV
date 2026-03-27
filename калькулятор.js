// Дисплей

let display228 = "0"
let resultDisplay = false;

// функция к дисплею

function appendToDisplay (value) {
    if (display228 === "0" || resultDisplay) {
        display228 = value;
    } else {
        display228 += value
    }

    resultDisplay = false;
    updateDisplay()
}


// Эта хрень выводит цыфоры
function updateDisplay() {
    const dispEl = document.getElementById("display");
    dispEl.textContent = display228;
}

// Сам калькулятор-бульбулятор

function calculateResult() {
    try{          // Интересная хрень
        const eval(display228);
        display228 += "\n" + resultDisplay.toSpring()
        updateDisplay();

    } catch (error) {
        display228 += "\n Ты лохонулся "
        updateDisplay()
    }

    // какая-то дичь. 

resultDisplay = true;

}

// Удоление

function clearLastElement() {
    display228 = display228.slice(0, -1)
    if (display228 === "") {
        display228 = "0"
    }
    updateDisplay();
}

// ПОЛНОЕ ЖЕСКОЕ УДОЛЕНИЕ

function clearDisplay() {
    display228 = "0"
    resultDisplay = false
    updateDisplay()
}

