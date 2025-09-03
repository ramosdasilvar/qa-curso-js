// Exercicio 1: Extraindo o primeiro nome
// Crie uma variavel com o nome completo de uma pessoa e exiba apenas o primeiro nome
let nomeCompleto = "Joaquim José da Silva"
let primeiroNome = nomeCompleto.split(' ')
console.log(primeiroNome[0])

// Exercicio 2 : Detectando a palavra "QA" em um texto
// Esreva um código que verificque se uma string contém a palavra "QA". Se encontrar, exiba "Este texto menciona QA!", 
// senão, "Nenhuma referencia a Qa encontrada."
let texto = "Achou a palavra QA"
let temQA = texto.includes('QA')
if (temQA){
  console.log("Este texto menciona QA!")
} else{
  console.log("Nenhuma referencia a QA encontrada.")
}

// Exercicio 3: Corrigindo formatação de texto
// Crie uma string com uma frase desorganizada (Exemplo: "ola MUNDO"). Corrija o formato, removendo espaços extras e deixando a primeira letra maiuscula
let frase = " ola MUNDO! "
let fraseCorrigida = frase.trim().toLowerCase().replace("ola", "Olá")
console.log(fraseCorrigida)

// Exercicio 4: Substituindo termos em uma Aviso
// Dada a string "Atenção: problema detectado no sistema.", substiruia "problema" por "atualização pendente detectada" e exiba a nova mensagem
let texto2 = "Atenção: problema detectado no sistema."
console.log(texto2.replace("problema detectado", "atualização pendente detectada"))

// Exercicio 5: Validando URLs
// Crie um código que verifique se um link começa com "https://" e termina com ".com". Exiba mensagens diferentes dependendo do caso.
let url = "https://www.testes.com"
let inicioUrl = url.startsWith("https://")
let finalUrl = url.endsWith(".com")

if (inicioUrl && finalUrl){
  console.log("É uma url ok")
} else if (!inicioUrl || !finalUrl){
  console.log("Não é uma URL válida!")
}