let output = document.getElementById('output');

function appendNumber(number) {
    if (output.value === "Error") {
        output.value = '';
    }
    output.value += number;
}

function appendOperator(operator) {
    if (output.value === "Error") {
        output.value = '';
    }
    output.value += operator;
}

function clearDisplay() {
    output.value = '';
}

function deleteLast() {
    output.value = output.value.slice(0, -1);
}

function calculateResult() {
    try {
        output.value = eval(output.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        output.value = 'Error';
    }
}
