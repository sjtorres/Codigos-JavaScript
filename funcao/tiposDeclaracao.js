console.log(soma(5, 6)) //  pode ser chamada antes

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(43, 18))  //  não pode ser chamada antes

// named function expression
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(25, 25))  //  não pode ser chamada antes