// Exercicio 1: Criando e modificando um array
// Crie uma array chamdo aniumais com três animais de sua escolha. Adicione um novo animal no final e remova o primeiro da lista
let animais = ["Gato", "Cachorro", "Peixe"]
animais.push("Passaro")
animais.shift()
console.log(animais)

// Exercicio 2: Exibindo itens de uma array
// Dado um array ["Maça", "Pera", "Uva", "Banana"], use um loop para exibir cada item separadamente.
let frutas = ["Maça", "Pera", "Uva", "Banana"]
console.log(frutas)
for (let i = 0; i < frutas.length; i++){
  console.log(frutas[i])
}

// Exercicio 3: Extraindo itens de um array
// Dado um array [100, 200, 300, 400, 500] e extraia os três primeiros números.
let centenas = [100, 200, 300, 400, 500] 

console.log(centenas.slice(0, 3))

// Exercicio 4: Removendo e substituindo elementos
// Crie um array com os dias da semana. Use splice() para substituir "Quarta-feira" por "Dia Livre"
let diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinda-feira", "Sexta-feira", "Sabado", "Domingo"]
diasSemana.splice(2, 1, "Dia Livre")
console.log(diasSemana)

