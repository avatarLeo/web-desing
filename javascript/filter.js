Array.prototype.filter2 = function(func){
    const newArray = new Array()
    for(let i = 0; i < this.length; i++){
        if(func(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notbook', preco: 2499, fragil: true},
    {nome: 'iPhone', preco: 2900, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo plastico', preco: 18.99, fragil: false},
    {nome: 'Pneu', preco: 800, fragil: false}
]

console.log(produtos.filter2(e => e.fragil && e.preco > 500))