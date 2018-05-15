// par nome/valor
const saudacao = 'Opa'    //  contexto léxico 1

function exec() {
    const saudacao = 'Faaala'       // contexto léxico 2
    return saudacao
}

    //  Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Sandro',
    idade: 44,
    peso: 78,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 1458
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)