const pilotos = ['Vettel', 'Alunos', 'Raikkonen', 'Massa']

//pop apaga o ultimo elemento do array e o shift remove o primeiiro
//adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')

console.log(pilotos)

//cria um novo array apartir do elemento 1 ao 3
const novoArray = pilotos.slice(1, 3)
console.log(novoArray)

function for_each(func, lista){
    for(i in lista){
        func(lista[i])
    }
}
n = [2, 4, 8, 10, 12]
for_each(e => console.log(e * 2), n)