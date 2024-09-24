


const lista = [
    {marca:"BMW", velMax: 200, cor: 'Azul'},
    {marca:"Ferrari", velMax: 320, cor: 'Vermelho'},
    {marca:"Fusca", velMax: 180, cor: 'Rosa'},
    {marca:"Uno", velMax: 200, cor: 'Prata'},
]

const produtos = [
    {nome: "Margarina", valor: 2},
    {nome: "Frango", valor: 18},
    {nome: "Macarrão", valor: 3},
    {nome: "Feijão", valor: 11},
    {nome: "Farinha de trigo", valor: 8},
]

let carroVeloz = 0
let velo = 0
for(i in lista){
    let carro = lista[i]
    if (carro.velMax > velo){
        carroVeloz = carro
        velo = carro.velMax
    }
}
let produtoCaro = {}
let valorAtual = 0
produtos.forEach(p => {
    if(p.valor > valorAtual){
        produtoCaro = p
        valorAtual = p.valor
    }
})

console.log(produtoCaro.nome, produtoCaro.valor)
