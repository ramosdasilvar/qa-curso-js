// loop for
for (let contador = 1; contador <= 10; contador++){
  console.log(`Repetição: ${contador}`)
}

// loop while
let numero = 1;
while (numero <= 10){
  console.log(`Numero: ${numero}`)
  numero++
}

// do while
let number = 1;
do {
  console.log(`Repetição: ${number}`)
  number++
} while (number <= 10)


// break
for (let i=1; i<=10; i++){
  if (i == 5 ){
    console.log("Interrompendo o loop...")
    break
  }
  console.log(i)
}

// continue
for (let i=1; i<=10; i++){
  if (i == 3 ){
    console.log("Pulando o numero 3...")
    continue
  }
  console.log(i)
}

// Exemplo 1: Percorrendo uma lista de clientes
let clientes = ["João", "Ana", "Aline", "Carlos", "Joana"]

for (let i=0; i < clientes.length; i++){
  console.log(`Enviando mensagem para ${clientes[i]}`)
}

// Exemplo 2: Somando números pares de 1 a 20
let soma = 0;
for (let num = 2; num <= 20; num+=2){
  soma = soma + num
}
console.log(`Soma dos números pares: ${soma}`)

// Exemplo 3: Verificando se um produto está em estoque
let produtos = ["Teclado", "Monitor", "Mouse", "Webcam", "Headset"]
let busca = "Headset"

for( let i = 0; i < produtos.length; i++){
  if (produtos[i] == busca){
    console.log(`Poduto encontrado: ${busca}`)
    break
  }
}

//Exemplo 4: COntagem regressiva para um evento
let diasParaEvento = 12

while(diasParaEvento > 0) {
  console.log(`Faltam ${diasParaEvento} dias para evento`)
  diasParaEvento--
}
console.log("O dia chegou!!!")