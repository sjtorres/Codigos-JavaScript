const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])  // Exibeo array na posição 0 e 3
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)  //  Mostra a quantidade de posições do array

valores.push({id: 3}, false, null, 'teste') // Acrescenta no array os valores informados
console.log(valores)

console.log(valores.pop())  //  Retira o último valor do array
delete valores[0]  //  Apaga o valor do array na posição 0
console.log(valores)

console.log(typeof valores)  //  Informa o tipo do array