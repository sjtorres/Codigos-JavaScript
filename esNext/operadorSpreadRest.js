// operador ... rest(juntar) / spread(espalhar))
// usar o rest com parametro de função

// usar spread com objeto
const funcionario = { nome: 'Sandro', salario: 12499.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Sandro', 'Patrícia', 'Rafael']
const grupoB = ['Isabela', 'Gabriela', ...grupoA]
console.log(grupoB)