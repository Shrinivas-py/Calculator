const display = document.getElementById("display");

function appendTodisplay(input) {
    display.value = display.value + input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "error";
    }
}

function clearDisplay(input) {
    display.value = "";
}

