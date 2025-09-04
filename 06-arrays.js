let linguagens = ["Javascript", "Python", "Ruby"]
console.log(linguagens)
console.log(linguagens[0])

let diversos = [29, "Idade", true, { ano: 2025}]
console.log(diversos)
console.log(diversos[3])
console.log(diversos[3].ano)

let listaDeCampos = []
console.log(listaDeCampos)


let programmingLanguages = ["Javascript", "Python", "C#"]

//push - Adiciona um item no final
programmingLanguages.push("Java")
console.log(programmingLanguages)

// pop() - remove o ultimo item
programmingLanguages.pop()
console.log(programmingLanguages)

// shift() - remove o primeiro item
programmingLanguages.shift()
console.log(programmingLanguages)

// unshift() - adidiona item no inicio
programmingLanguages.unshift("Ruby")
console.log(programmingLanguages)

// length - retorna o tamanho do array
console.log(programmingLanguages.length)

// indexOf() - retorna o índice de uma item
console.log(programmingLanguages.indexOf("C#"))

// slice() - Retorna parte do array
console.log(programmingLanguages.slice(1, 3))

// splice() - adiciona e remove elementos
programmingLanguages.splice(2, 1, "GO")
console.log(programmingLanguages)
programmingLanguages.splice(2, 2, "Java", "C++")
console.log(programmingLanguages)

// join() - une elementos em uma string
console.log(programmingLanguages.join(" | "))
console.log(programmingLanguages.join(";"))

//Exemplo 1: Adicionando e removendo elementos
let tarefas = ["Estudar", "Treinar", "Ler"]
tarefas.push("Caminhar")
console.log(tarefas)
tarefas.shift()
console.log(tarefas)

// Exemplo 2: Localizando um elemneto no array
let timesDeFutebol = ["São Paulo", "Palmeiras", "Grêmio"]
let posicao = timesDeFutebol.indexOf("São Paulo")
console.log(`O time está na posição: ${posicao}`)

// Exemplo 3: Transformando uma array em uma string
let ingredientes = ["Farinha", "Ovos", "Leite"]
let receita = ingredientes.join(" + ")
console.log(`Ingredientes: ${receita}`)

// Exemplos 4: removendo o último elemento do array
let cidades = ["Braga", " Porto", "Lisboa", "São Paulo"]
cidades.pop()
console.log(cidades)