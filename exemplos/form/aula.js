produtos = [
    {nome: "mouse", valor: 16, led: false},
    {nome: "aircooler gamer", valor: 52, led: true},
    {nome: "cabo USB", valor: 6, led: true},
    {nome: "monitor", valor: 460, led: false},
    {nome: "teclado", valor: 160, led: true},
]

const produtoGamer = produtos.filter(function (e){
    return e.led
})

console.log(produtoGamer)