//  Armazenando uma funçao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 8))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 4))

const imprimirLegal = a => console.log(a)
imprimirLegal('Legal!!')