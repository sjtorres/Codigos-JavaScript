const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado, parabéns!')
    } else {
        console.log('Reprovado, estude mais!')
    }
}

imprimirResultado(6)
imprimirResultado(8)

imprimirResultado('oito') // cuidado!!!