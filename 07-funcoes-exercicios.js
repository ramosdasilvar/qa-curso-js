// Exercicio 1: Invertendo um  texto
// Crie uma função que receba uma String e retorne o texto invertido.
function inverterTexto(texto){
  return texto.split("").reverse().join("")
}

console.log(inverterTexto("JavaScript é uma boa linguagem"))

// Exercicio 2: Verificando multiplos de 5
//Escreva uma função que receba um número e determine seele é multiplo de 5
function ehMultipliDeCinco(numero){
  return numero % 5 == 0
}

console.log(ehMultipliDeCinco(10))

// Exercicio 3: VErificando a presença de uma letra em um Nome
// crie uma função que receba um nome e verifique se ele contém a letra "a", retornando true ou false
function buscaLetraA(nome){
  return nome.toLowerCase().includes("a")
}

console.log(buscaLetraA("Joaquim"))