// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b)

// Template String
const produto = 'iPad'
console.log(`O ${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = "Coder"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Sandro', idade: 44 }
console.log(i, nome)