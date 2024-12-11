const displayEL = document.querySelector("#display")

let x = ""
let y = ""

let opStatus = [false,false,false,false]
let operators = ['+', '-', '*', '/']
let inProgress = false

function digit(n){
    if(n === '.'){
        if (x.charAt(x.length - 1) != '.'){
             x += n
            displayEL.textContent = x
        }
    }
    else{
        x += n
        displayEL.textContent = x
    }
}

function operation(operator){
    equals()
    switch (operator) {
        case '+':
            opStatus[0] = true
            displayEL.textContent = "0"
            y = x
            x = ""
            break;
        case '-':
            opStatus[1] = true
            displayEL.textContent = "0"
            y = x
            x = ""
            break;
        case '*':
            opStatus[2] = true
            displayEL.textContent = "0"
            y = x
            x = ""
            break;
        case '/':
            opStatus[3] = true
            displayEL.textContent = "0"
            y = x
            x = ""
            break;
        default:
            break;
    }
}

function equals(){
    let result
    if(opStatus[0]){
        result = (parseFloat(x) + parseFloat(y))
        x = result.toString()
        y = ""
        opStatus[0] = false
        displayEL.textContent = result
    }
    else if(opStatus[1]){
        result = -(parseFloat(x) - parseFloat(y))
        console.log(result);
        x = result.toString()
        y = ""
        opStatus[1] = false
        displayEL.textContent = result
    }
    else if(opStatus[2]){
        result = Math.round((parseFloat(x) * parseFloat(y)) * 100000) / 100000
        x = result.toString()
        y = ""
        opStatus[2] = false
        displayEL.textContent = result
    }
    else if(opStatus[3]){
        result = Math.round((parseFloat(x) / parseFloat(y)) * 100000) / 100000
        x = result.toString()
        y = ""
        opStatus[3] = false
        displayEL.textContent = result
    }
}
function clearDigits(){
    x = ""
    y = ""
    opStatus = [false,false,false,false]
    displayEL.textContent = "0"
}
function clearEntry(){
    x = x.length > 1 ? x.slice(0,-1) : "0"
    displayEL.textContent = x
}

