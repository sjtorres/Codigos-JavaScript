const pai = { nome: 'Sandro', corCabelo: 'Castanho' }

const filha1 = Object.create(pai)
filha1.nome = 'Isabela'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Gabriela', writable: false, enumerable: true  }
})

console.log(filha2.nome)
filha2.nome = 'Gabriela Torres'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log(Object.keys(pai))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}