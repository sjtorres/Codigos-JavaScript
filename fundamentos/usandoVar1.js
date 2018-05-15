{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)       //  variavel fora de uma função pode ser famada de qualquer lugar
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)              //  variável dentro de uma função só pede ser chamada dentro da função
}
 teste()