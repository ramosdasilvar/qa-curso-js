// Exercicio 1: Classificando idades: Crie um programa que receba uma idade e classifique a pessoa como 
// "Criança", "Adolecente" ou "Adulto".
let idade = 30

if (idade < 12) {
  console.log("Criança")
} else if (idade < 18){
  console.log("Adolecente")
} else {
  console.log("Adulto")
}

// Exercicio 2: Sistema de notas escolares: Escreva um código que receba uma nota e calssifique o aluno da seguinte forma: 
// 90 ou mais: "Aprovado com A" 
// 70 a 89: "Aprocado com B" 
// Menos de 70: "Reprovado"
let nota = 100

if( nota >= 90){
  console.log("Aprovado com A" )
} else if (nota >= 70){
  console.log("Aprocado com B")
} else{
  console.log("Reprovado")
}

// Exercicio 3: Escolhendo um destino viagem: use switch para exibir uma recomendação de destino de viagem
//  com base em um número digitado pelo usuário (1 para praia, 2 para montanhe, etc.).
let destino = 3

switch (destino) {
  case 1:
    console.log("Seu destino é Praia")
    break
  case 2:
    console.log("Seu destino é Montanha")
    break
  case 3:
    console.log("Seu destino é Cidade")
    break
  default:
    console.log("Seu destino é Casa")
}

// Exercicio 4: Verificação de login: Crie uma variavel senhaCorreta e senhaDigitada e exiba "Acesso permitido"
//  se forem iguais, e "Senha incorreta" caso contrário.
let senhaCorreta = "1234"
let senhaDigitada = "1234"
let login = senhaDigitada == senhaCorreta ? "Acesso permitido" : "Acesso negado, senha incorreta!"

console.log(login)