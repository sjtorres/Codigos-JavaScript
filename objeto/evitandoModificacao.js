// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', Preco: 1.99, tag: 'Promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = { nome: 'Sandro', idade: 44 }
Object.seal(pessoa)

pessoa.sobrenome = 'Torres'
delete pessoa.nome
pessoa.idade = 35
console.log(pessoa)

// Object.freeze = selado