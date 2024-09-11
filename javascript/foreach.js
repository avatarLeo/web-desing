const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((ap, indice) => console.log(ap, ' ', indice + 1))

const num = new Array(12, 6, 0, 45, 2, 13, 16, 20, 19)

let valor = 0
const conta = function(n){
    
    if(n > 10 && n < 20){
        valor++
    }
}

num.forEach(conta)

console.log(valor)