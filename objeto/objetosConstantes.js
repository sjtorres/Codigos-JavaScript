// pessoa -> 123 -> {...}
const pessoa = { nome: 'Sandro' }
pessoa.nome = 'Patrícia'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Rafael' }

Object.freeze(pessoa)

pessoa.nome = 'Isabela'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Sandro' })
console.log(pessoaConstante)

pessoaConstante.nome = 'Gabriela'
pessoaConstante.end = 'Rua Acolá'

console.log(pessoaConstante)
console.log(pessoaConstante.end)
