const tecnologias = new Map()
tecnologias.set('react', {
    framework: false
})
tecnologias.set('angular', {
    framework: true
})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Números'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set('Sandro', 1123.99)
chavesVariadas.set('Developer', 'Sandro')

console.log(chavesVariadas)
console.log(chavesVariadas.size)