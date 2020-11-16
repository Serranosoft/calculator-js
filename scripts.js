

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
        if (operatorSelected != undefined) {
            if (n2 == undefined || isNaN(n2) && n1 == undefined || isNaN(n1)) {
                
            } else {
                if(screen.textContent != "") {
                    n2 = Number.parseFloat(screen.textContent);
                    if (typeof n1 == "number" && typeof n2 == "number") {
                        operate(operatorSelected, n1, n2);
                        operatorSelected = undefined;
                    }
                }
            }

        }
        if (screen.textContent != "") {
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
        operate(operatorSelected, n1, n2);
        operatorSelected = undefined;
        numberSelected = "";
        n1 = "";
        n2 = "";
    }


})




