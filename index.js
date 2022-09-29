let num1 = 0

let sumEL = document.getElementById("sum")

function add1() {
    let result = num1 + 1
    sumEL.textContent = + result
    num1 = num1 + 1
}
console.log(num1)

function add2() {
    let result = num1 + 2
    sumEL.textContent = + result
    num1 = num1 + 2
}
console.log(num1)

function add3() {
    let result = num1 + 3
    sumEL.textContent = + result
    num1 = num1 + 3
}
console.log(num1)


let num2 = 0

let guest = document.getElementById("guest")


function addone() {
    let result = num2 + 1
    guest.textContent = + result
    num2 = num2 + 1
}
console.log(num2)

function addtwo() {
    let result = num2 + 2
    guest.textContent = + result
    num2 = num2 + 2
}
console.log(num2)

function addthree() {
    let result = num2 + 3
    guest.textContent = + result
    num2 = num2 + 3
}
console.log(num2)

function reset() {
    num1 = 0
    num2 = 0
    sumEL.textContent = num1
    guest.textContent = num2
}
console.log(sumEL)