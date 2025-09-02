// Exercio 1 : Cadastro de usuário: Crie uma variável usuario para armazenar seu nome
// e outra idade para sua idader. Exiba no console "O usuário [nome] tem [idade] anos"

let nome = "Ricardo"
let idade = 27
console.log(`O usuário ${nome} tem ${idade} anos`)

// Exercício 2: Preço com imposto: Declare uma variavel precoProduto com o preço inicial
// de um produto e imposto com o percentual de imposto aplicado (por exemplo, 0.2 para 20%).
// Calcule o valor total (preço inicial + imposto) e exiba o resultado.

let precoProduto = 100
let imposto = precoProduto * 0.2
let valorTotal = imposto + precoProduto
console.log(`O valor do produto com 20% de imposto é: R$${valorTotal}`)

// Exercicio 3: Lista de filmes favoritos: Crie um array de filmes com o nome de três filmes que
// você adora assistir. Mostre o terceiro filme na lista usando o índice correto do array

let filmes = ["A origem","Requiem for a dream","Doutor Estranho"]
console.log(`O terceiro filmes favorito da lista é: ${filmes[2]}`)

// Exercicio 4: Informações de um smartphone: Crie um objeto marthphone com a propriedades
// mrarca, modelo e ano lancamento. Exiba o modelo e o ano de lançamento no console

let smartphone = {
  marca: "Apple",
  modelo: "Iphone 14",
  anoLancamento: "2018"
}
console.log(`O smartphone "${smartphone.modelo}" foi lançado em ${smartphone.anoLancamento}`)

// Exercicios 5: Área de um quadrdado: crie uma constante lado = 6 e calcule a área de um 
// quadrado usando a fórmula lado * lado. Exiba o resultado no console.

const lado = 6
let areaQuadrado = lado * lado
console.log(`A area do quadrado, com tamanho de lado = a ${lado}, é: ${areaQuadrado}cm2.`)
