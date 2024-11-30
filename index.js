let firstEL = document.querySelector("#first-el")
let secondEL = document.querySelector("#second-el")

let x = 0
let y = 0
let decimal = false
let plusOp = false


function digit(n){
    x *= 10
    x += n
    firstEL.textContent = x
}
function plus(){
    y = x
    x = 0
    secondEL.textContent = y
    firstEL.textContent = x
    plusOp = true
}
function minus(){}
function multiply(){}
function divide(){}
function dot(){}
function equals(){
    if (plusOp){
        x = x + y
        y = 0
        firstEL.textContent = x
        secondEL.textContent = y
    }
}
function clearDigits(){
    x = 0
    y = 0
    let plusOp = false
    firstEL.textContent = x
    secondEL.textContent = y
}


