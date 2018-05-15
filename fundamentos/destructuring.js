// novo recurso do ES2015

const pessoa = {
    nome: 'Sandro',
    idade: 44,
    endereco: {
        logradouro: 'Rua sem fim',
        numero: 'infinity'
    }
}

console.log(pessoa)

const { nome, idade } = pessoa
console.log(nome, idade)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, telefone = true } = pessoa
console.log(sobrenome, telefone)

const { conta: { ag, conta } } = pessoa
console.log(ag, conta)
