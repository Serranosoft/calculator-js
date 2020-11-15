

let numberSelected = "";
let operatorSelected;
let screen = document.getElementById("screen");
let equal = document.getElementById("equal");

const numbers = [...document.getElementsByClassName("number")];
const operators = [...document.getElementsByClassName("operator")];

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (index) {
        numberSelected += index.target.textContent;
        display(numberSelected);
    })
}

let n1;
let n2;
function display(number) {
    screen.innerHTML = number;
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function (index) {
        console.log("operador: "+operatorSelected);
        console.log("numero 1: "+n1);
        console.log("numero 2: "+n2);
        if (operatorSelected != undefined) {
            if (n2 == undefined || isNaN(n2) && n1 == undefined || isNaN(n1)) {
                
            } else {
                n2 = Number.parseFloat(screen.textContent);
            }

            if (typeof n1 == "number" && typeof n2 == "number") {
                console.log("numero 1: "+n1);
                operate(operatorSelected, n1, n2);
                operatorSelected = undefined;
            }

        }
        if (screen.textContent != "") {
            console.log("NUMERO 1 COGE CONTENIDO "+n1);
            n1 = Number.parseFloat(screen.textContent);
            numberSelected = "";
        }
        screen.innerHTML = "";
        operatorSelected = index.target.textContent;
    })
}

equal.addEventListener("click", function () {
    n2 = screen.textContent;
    if (n2 == "" || isNaN(n2) && n1 == undefined || isNaN(n1)) {
        
    } else {
        n2 = Number.parseFloat(screen.textContent);
    }

    if (typeof n1 == "number" && typeof n2 == "number") {
        console.log(n2);
        operate(operatorSelected, n1, n2);
        operatorSelected = undefined;
        numberSelected = "";
    } else {
        console.error("NUMERO 1 NO ES UN NUMERO: " + n1 + " O NUMERO 2: " + n2);
    }


})




