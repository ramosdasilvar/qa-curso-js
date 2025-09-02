// if else
let temperatura = 19

if (temperatura > 30) {
  console.log("Está muito quente!")
} else if(temperatura >= 20) {
  console.log("O clima está agradavel")
} else if (temperatura >= 10) {
  console.log("O clima está frio!")
} else {
  console.log("O clima está muito frio!")
}

//switch case
let corEscolhida = "verde"

switch(corEscolhida){
  case "vermelho":
    console.log("Pare!")
    break
  case "amarelo":
    console.log("Atenção!")
    break
  case "verde":
      console.log("Siga!")
      break
  default:
    console.log("Cor inválida!")
}

// Operador ternário
// condição a ser avaliada ? ação se a condição der true : ação se a condição der false
let idade = 16
let podeVotar = idade >= 18 ? "Pode votar" : "Não pode votar"
console.log(podeVotar)

//Exemplo 1 : Verificar se um número é positivo ou negativo
let numero = 0 

if (numero > 0) {
  console.log("O numero é positivo")
} else if (numero < 0 ){
  console.log("O numero é negativo")
} else {
  console.log("O numero é zero")
}

//Exemplo 2: Sistema de categorias de um jogo
let nivel = 5

if (nivel >= 10){
  console.log("Voê está no nível avançado")
} else if (nivel >= 5){
  console.log("Voê está no nível intermediário")
} else {
  console.log("Voê está no nível iniciante")
}

//Exemplo 3: Escolher um plano de assinatura
let plano = "asd"

switch (plano){
  case "basico":
    console.log("Você tem acesso limitado")
    break
  case "intermediario":
    console.log("Você tem acesso a cursos completos")
    break
  case "premium":
    console.log("Você tem acesso VIP e suporte 24h!")
    break
  default:
    console.log("Você não tem nenhum plano")
}


//Exemplo 4: VErificar se um usuário pode acessar um site
let temConta = true

let mensagem = temConta ? "Bem-vindo de volta" : "Crie uma conta para acessar"
console.log(mensagem)