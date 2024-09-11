const pilotos = ['Vettel', 'Alunos', 'Raikkonen', 'Massa']

//pop apaga o ultimo elemento do array e o shift remove o primeiiro
//adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')

console.log(pilotos)

//cria um novo array apartir do elemento 1 ao 3
const novoArray = pilotos.slice(1, 3)
console.log(novoArray)