function cumprimentar(nome) {
  return `Olá, ${nome}`
}

console.log(cumprimentar("Moisés"))

// Formato tradicional
function somar(a, b){
  return a + b
}
console.log(somar(5, 10))

// Funções anonimas
const multiplicar = function(a, b){
  return a * b
}
console.log(multiplicar(5, 10))

// arrow functions
const dividir = (a, b) => a / b
console.log(dividir(10, 2))

const imprimirBoasVindas = () => {
  console.log("Seja bem-vindo!")
}
imprimirBoasVindas()

function processarTexto(texto) {
  function transformarEmMaiscula(str){
    return str.toUpperCase()
  }
  return transformarEmMaiscula(texto)
}

console.log(processarTexto("texto maiusculo"))

// Exemplo 1: Função para contar quantas vez uma letra aparece em uma palavra
function contarLetra( palavra, letra) {
  let palavraFormatada = palavra.toLowerCase()
  let letraFormatada = letra.toLowerCase()
  let contador = 0

  for (let i=0; i < palavraFormatada.length; i++){
    if (palavraFormatada[i] == letraFormatada) {
      contador++
    }
  }
  return contador
}

console.log(contarLetra("Programação", "r"))