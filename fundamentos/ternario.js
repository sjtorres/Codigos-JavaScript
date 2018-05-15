const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))


let pessoa = { nome: 'Sandro', falar: function() {
    return `Eu sou ${this.nome}`
} }

console.log(pessoa.falar())