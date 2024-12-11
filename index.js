const firstEL = document.querySelector("#first-el")
const secondEL = document.querySelector("#second-el")

let x = ""
let y = ""

let operationStatus = [false,false,false,false]
let operators = ['+', '-', '*', '/']
let inProgress = false


function digit(n){
    if(n === '.'){
        if (x.charAt(x.length - 1) != '.'){
            x += n
            firstEL.textContent = x
        }
    }
    else{
        x += n
        firstEL.textContent = x
    }
}

function operation(operator){
    if (inProgress){
        equals()
    }
    switch (operator) {
        case '+':
            operationStatus[0] = true
            y = x
            x = ""
            firstEL.textContent = "0"
            secondEL.textContent = y
            break;
        case '-':
            operationStatus[1] = true
            y = x
            x = ""
            firstEL.textContent = "0"
            secondEL.textContent = y
            break;
        case '*':
            operationStatus[2] = true
            y = x
            x = ""
            firstEL.textContent = "0"
            secondEL.textContent = y
            break;
        case '/':
            operationStatus[3] = true
            y = x
            x = ""
            firstEL.textContent = "0"
            secondEL.textContent = y
            break;
        default:
            console.log("default case");
            break;
    }
}

function equals(){ // add actions convert strings to ints 
    let result
    if(operationStatus[0]){
        console.log("plus op")
        operationStatus[0] = false
    }
    else if(operationStatus[1]){
        console.log("minus op")
        operationStatus[1] = false
    }
    else if(operationStatus[2]){
        console.log("multiply op")
        operationStatus[2] = false
    }
    else if(operationStatus[3]){
        console.log("divide op")
        operationStatus[3] = false
    }
    inProgress = false
}
function clearDigits(){
    x = ""
    y = ""
    operationStatus = [false,false,false,false]
    firstEL.textContent = "0"
    secondEL.textContent = "0"
}
function clearEntry(){
    x = x.length > 1 ? x.slice(0,-1) : "0"
    firstEL.textContent = x
}

