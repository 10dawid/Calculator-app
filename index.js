let firstEL = document.querySelector("#first-el")
let secondEL = document.querySelector("#second-el")

let x = ""
let y = ""
let plusOp = false
let minusOp = false
let multiplyOp = false
let divideOp = false

function digit(n){
    x += n
    firstEL.textContent = x
}
function plusF(){
    y = x
    x = ""
    secondEL.textContent = y
    firstEL.textContent = x
    plusOp = true
}
function minusF(){
    y = x
    x = ""
    secondEL.textContent = y
    firstEL.textContent = x
    minusOp = true
}
function multiplyF(){
    y = x
    x = ""
    secondEL.textContent = y
    firstEL.textContent = x
    multiplyOp = true
}
function divideF(){
    y = x
    x = ""
    secondEL.textContent = y
    firstEL.textContent = x
    divideOp = true
}
function equals(){
    let result
    if (plusOp){
        result = Math.round((parseFloat(y) + parseFloat(x))*10000)/10000
        x = ""
        y = ""
        firstEL.textContent = result
        secondEL.textContent = y
        plusOp = false
    }
    else if (minusOp){
        result = Math.round((parseFloat(y) - parseFloat(x))*10000)/10000
        x = ""
        y = ""
        firstEL.textContent = result
        secondEL.textContent = y
        minusOp = false
    }
    else if (multiplyOp){
        result = Math.round((parseFloat(y) * parseFloat(x))*10000)/10000
        x = ""
        y = ""
        firstEL.textContent = result
        secondEL.textContent = y
        multiplyOp = false
    }
    else if (divideOp){
        result = Math.round((parseFloat(y) / parseFloat(x))*1000000)/1000000
        x = ""
        y = ""
        firstEL.textContent = result
        secondEL.textContent = y
        divideOp = false
    }
}
function clearDigits(){
    x = ""
    y = ""
    plusOp = false
    plusOp = false
    minusOp = false
    multiplyOp = false
    divideOp = false
    firstEL.textContent = "0"
    secondEL.textContent = "0"
}
function clearEntry(){
    x = x.slice(0,-1)
    firstEL.textContent = x
}

