const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // retira o último elemento
console.log(pilotos)

pilotos.push('Verstappen')  // add elemento na última posição
console.log(pilotos)

pilotos.shift()  // retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')  // add na primeira posiçãp
console.log(pilotos)

// splice pode add e remover elementos

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)  // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do elemento 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega do elemento 1 ao elemento 3 o 4 não entra
console.log(algunsPilotos2)