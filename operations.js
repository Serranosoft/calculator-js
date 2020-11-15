
function add(n1, n2) {
    return n1 + n2;
}


function subtract(n1, n2) {
    return n1 - n2;
}


function multiply(n1, n2) {
    return n1 * n2;
}


function divide(n1, n2) {
    return (n1 / n2).toFixed(2);
}


function operate(operator, n1, n2) {
    console.log("HA LLEGADO!: " + n1 + operator + n2);

    switch (operator) {
        case "+":
            display(add(n1, n2));
            break;

        case "-":
            display(subtract(n1, n2));
            break;

        case "*":
            display(multiply(n1, n2));
            break;

        case "/":
            display(divide(n1, n2));
            break;

    }
}


