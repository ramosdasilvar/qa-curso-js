// Exercicio 1: Sensor temperatura
// Crie um programa que analisa a temperatura do ambiente de trabalho e exiba mensagens diferentes:
// Se estiver abaixo de 10°C, mostre "Está muito frio"
// Se estiver entre 10°C e 25°C, mostre "Temperatura agradável..."
// Se estiver acima de 25°C, mostre "Está muito quente!"

let temperatura = 15
if (temperatura < 10 ){
  console.log("Está muito frio")
} else if (temperatura <= 25){
  console.log("Temperatura agradável...")
}else{
  console.log("Está muito quente!")
}

// Exercicio 2: Controle de acesso
// Imagine que você está desenvolvendo um sistema de login. Cheque se o usuário está cadastrado (variavel estaCadastrado) 
// e se o código de acesso do usuário é valido (variável codigo) e valide se pode entrar: 
// Se ele estivier cadastrado e o código for "1234", exiba "Acesso permitido!"
// Se ele não estiver cadastrado ou se o código for qualquer outro valor, exiba "Acesso não permitido. Tente novamente."

let estaCadastrado = true
let codigo = "134"

if (estaCadastrado && codigo == "1234"){
  console.log("Acesso permitido")
} else {
  console.log("Acesso não permitido. Tente novamente.")
}

// Exercicio 3: Verificador de placar 
// Um jogo retorna dois valores: pontosJogador e pontosAdversario. Crie uma lógica que:
// Se pontosJogador for maior, exiba "Você venceu!"
// Se pontosAdversario for maior, exiba "Você perdeu"
// Se forem iguais, exiba "Empate!"

let pontosJogador = 10
let pontosAdversario = 1

if (pontosJogador > pontosAdversario){
  console.log("Você venceu!")
} else if (pontosJogador < pontosAdversario){
  console.log("Você perdeu")
} else{
  console.log("Empate!")
}

// Exercicio 4: Lanchonte Digital
// Crie um sistema de pedidos onde o usuário pode escolher entre três opções de lanche digitando um número:
// 1 - "Você escolheu um Hambúrguer"
// 2 - "Você escolheu uma Pizza"
// 3 - "Você escolheu um Sanduíche"
// Se for um numero diferente desses, exiba "Opção inválida"

let lanche = 2

switch (lanche) {
  case 1:
    console.log("Você escolheu um Hambúrguer")
    break
  case 2:
    console.log("Você escolheu uma Pizza")
    break
  case 3:
    console.log("Você escolheu um Sanduíche")
    break
  default:
    console.log("Opção inválida")
    break
}

// Exercicio 5: Alerta de bateria
// Crie uma variavel nivelBateria (de 0 a 100) e exiba mensagens como:
// "Bateria cheia!" se for maior que 80
// "Bateria moderada" se estiver entre 30 e 80
// "Bateria fraca! Conecte o carregador!" se for menor que 30

let nivelBateria = 80

if (nivelBateria > 80) {
  console.log("Bateria cheia!")
} else if (nivelBateria > 30 && nivelBateria < 80) {
  console.log("Bateria moderada")
} else {
  console.log("Bateria fraca! Conecte o carregador!")
}