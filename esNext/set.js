// não aceita repetição / não indexada
const times = new Set()

times.add('Flamengo')
times.add('Gremio').add('Fluminense').add('Palmeiras')
times.add('Botafogo').add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Gremio')
console.log(times.has('Gremio'))

const nomes = ['Sandro', 'Patrícia', 'Rafael', 'Isabela', 'Gabriela', 'Sandro']
const nomeSet = new Set(nomes)

console.log(nomeSet)