let cidade = "SBC"
let pais = 'Brasil'
let mensagem = `Bem-vindo a ${cidade}, ${pais}!`
console.log(mensagem)

// concatenção
let primeiroNome = "Carlos"
let sobrenome = "Cunha"
let nomeCompleto = primeiroNome + " " + sobrenome
let nomeFormatado = `${primeiroNome} ${sobrenome}`
console.log(nomeCompleto)
console.log(nomeFormatado)

// acessar os caracteres de uma string
let palavra = "Desenvolvimento"
console.log(palavra[5])

// obter o comprimento de uma string
let frase = "Javascript para QAs"
console.log(frase.length)

//  toUpperCase()
let texto1 = "javascript"
console.log(texto1.toUpperCase())

// toLowerCase()
let texto2 = "TESTE"
console.log(texto2.toLowerCase())

// trim()
let texto3 = " Olá! "
console.log(texto3.trim())
console.log(texto3)


// includes()
let texto4 = "Aprendendo JS"
console.log(texto4.includes("JS"))

// slice()
let texto5 = "Automação"
console.log(texto5.slice(0, 4))

// replace
let texto6 = "Erro detectado!"
console.log(texto6.replace("Erro", "Defeito"))

// startsWith()
let texto7 = "Inovação"
console.log(texto7.startsWith("Ino"))

// endsWith()
let texto8 = "Atualização"
console.log(texto8.endsWith("ção"))

// split()
let texto9 = "Automação de testes"
console.log(texto9.split(" "))
let txt9 = "Javascript, Python, Java, Ruby"
console.log(txt9.split(","))

// combinando métodos
let saudacao = " bem-vindo! "
console.log(saudacao.trim().toUpperCase())

// Exemplo 1: Formatando nomes corretamente
let nomeUsuario = " juliana pires "
let nomeModificado = nomeUsuario.trim().replace("pires", "silva").toUpperCase()
console.log(nomeModificado)

// Exemplo 2: Verificando dominios de email
let email = "usuario@empresa.com"

if (email.endsWith("@empresa.com")){
  console.log("Email corporativo")
}else{
  console.log("Email pessoal detectado")
}

// Exemplo 3 : Extraindo partes de um texto
let descricao = "O evento sera realizado no dia 15 de junho."
let data = descricao.slice(31, 42)
console.log(data)

// Exemplo 4: Substituindo palavras em uam mensagem
let aviso = "Senha está incorreta"
let novoAviso = aviso.replace("incorreta", "invalida")
console.log(novoAviso)

// Exemplo 5: Verificando se o usuário preencheu o campo obrigatório
let coementario = " "
if (coementario.trim() == ""){
  console.log("O campo comentario está vazio")
} else {
  console.log("Campo comentario enviado com sucesso")
}