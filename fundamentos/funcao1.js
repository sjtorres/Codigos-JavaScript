// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  //  Vai dar NaN (Não tem Número)
imprimirSoma(2,7,8,12,6,9)  // Vai somar apenas os dois primeiros números e ignorar o resto

// Função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(3, 5))
console.log(soma(4))  // Soma vai dar 4 pois o valor de b = 0