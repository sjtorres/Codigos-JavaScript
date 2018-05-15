const alunos = [
    { nome: 'Isabela', nota: 9.2 },
    { nome: 'Gabriela', nota: 7.9 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log( total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const totalNota = alunos.map(getNota).reduce(soma)
console.log(totalNota / alunos.length)