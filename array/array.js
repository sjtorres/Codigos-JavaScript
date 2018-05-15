console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Sandro', 'Patrícia', 'Isabela', 'Gabriela', 'Rafael')
console.log(aprovados)

aprovados = ['Sandro', 'Patrícia', 'Isabela', 'Gabriela', 'Rafael']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados[5])

aprovados[0] = 'Papai'
aprovados.push('Vovô')
console.log(aprovados.length)
console.log(aprovados)

aprovados[11] = 'Tia'
console.log(aprovados.length)
console.log(aprovados[10] === undefined)

console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[0]
console.log(aprovados)

aprovados = ['Papai', 'Mamãe', 'Filhos']
aprovados.splice(1, 0, 'Bisavo', 'Tia')
console.log(aprovados)