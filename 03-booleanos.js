let estaChovendo = true
let temDesconto = false

console.log(estaChovendo)
console.log(temDesconto)

console.log(8===8)
console.log(8==='8')
console.log(12!==7)
console.log( 5 < 9)
console.log(10 > 12)
console.log(6 <= 6)
console.log(18 >= 25)

// exemplo
let idade = 18
console.log(idade >= 18)
console.log(idade < 18)

// and && ( a and b )
let usuarioAtivo = true
let possuiPlanoPago = true

if (usuarioAtivo && possuiPlanoPago){
  console.log("Acesso liberado")
} else {
  console.log("Precisa ativar sua conta!")
}
// or || ( a or b)
let usuarioAtivo2 = false
let possuiPlanoPago2 = false

if (usuarioAtivo2 || possuiPlanoPago2){
  console.log("Acesso liberado")
} else {
  console.log("Precisa ativar sua conta!")
}
// not ! ( not b)
let usuarioAtivo3 = true
console.log(!usuarioAtivo3)

// Exemplo 1: Aumento de 10% para funcionarias mulheres com mais de 10 anos de empresa
let sexo = "feminino"
let anosEmpresa = 15

if (sexo == "feminino" && anosEmpresa >= 10){
  console.log("Vai ganhar aumento de 10%")
} else {
  console.log("Não vai ganhar aumento")
}


// Exemplo 2: Acesso liberado se usuário estiver logado ou se ele for admin
let usuarioLogado = false
let ehAdmin = true

if (usuarioLogado || ehAdmin){
  console.log("Acesso liberado")
}else{
  console.log("Acesso negado")
}

// Exemplo 3: Sistema de desconto em uma loja
let valorCompra = 150
let temCupomDesconto = true

if (valorCompra >= 200 || temCupomDesconto){
  console.log("Desconto aplicado!")
}else {
 console.log("Não tem desconto")
}