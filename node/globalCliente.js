require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //não funciona pois add Object.freeze
console.log(MinhaApp.nome)