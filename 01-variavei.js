let nome = "Ricardo"
const idade = "35"
var cidade = "SBC"

// número
let  maximoTentativasPermitidas = 35

// texto
let usuario = "teste89"

// booleanos (true ou false)
let usuarioAdmin = true

//lista (array)
let idiomas = ["inglês", "Português", "Italiano", "Francês" ]

// objetos
let funcionario = {
  nome: "José",
  cargo: "Analista Testes",
  salario: 6000,
  contratoValido: true
}


// Exemplo 1: Calcular o valor total de uma compra
let precoUnitario = 120
let quantidade = 3

let totalCompra = precoUnitario * quantidade

console.log("O valor total da compra é: $" + totalCompra)

// Exemplo 2: Juntar textos de forma dinâmica
let primeiroNome = "Ana"
let sobrenome = "Nunes"
console.log("Olá, " + primeiroNome + " " + sobrenome +"!")

// Exempo 3: Acessar informações em lista
let linguagens = ["Python", "Javascript", "Java"]
console.log("Quero aprender:" + linguagens[1])


// Exemplo 4: Quero acessar informações de um objeto chamado carro
let carro = {
  marca: "Subaru",
  modelo: "Forester",
  ano: 2016
}

console.log("Carro: " + carro.marca + " " + carro.modelo)