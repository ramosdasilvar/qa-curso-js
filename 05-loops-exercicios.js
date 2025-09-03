// Exercicio 1: Contando multiplos de 3
// Crie um loop for que exiba no console todos os múltiplos de 3 em 3 até 30.
for (let i = 3; i<=30; i += 3){
  console.log(`O numero ${i} é multiplo de 3`)
}

//Exercicio 2: Filtrando números menores que 50
//Dado uma array de números, utlize um loop para percorrê-lo e exiba apenas os numéros menores que 50
let numeros = [11, 53, 24, 90, 21, 2, 21, 4, 99]
for (let i=0; i < numeros.length; i++){
  if (numeros[i] < 50){
    console.log(numeros[i])
  }
}

//Exercicio 3: Fatorial de um numero
// Escreva um código que calcule o fatorial de 5 (5! = 5 x 4 x3 x2 x1).
let numero = 5
let fatorial = 1

for (let i = numero; i > 0; i--){
  fatorial = fatorial *i
}
console.log(`O fatorial de ${numero} é: ${fatorial}`)