// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220
produto.cor = 'Tabaco'
produto.quantidade = 6

console.log(produto)
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Sandro',
        idade: 44,
        endereco: {
            rua: 'Logo ali',
            numero: 1458
        }
    },
    condutores:[{
        nome: 'Patrícia',
        idade: 38
    }, {
        nome: 'Gabriela',
        idade: 18
    }, {
        nome: 'Isabela',
        idade: 18
    }],
    calcularValorSeguro: function() {
        // ...
    }
}


carro.proprietario.endereco.numero = 1000
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

console.log(carro.condutores)
console.log(carro.condutores.length)