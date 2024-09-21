Array.prototype.map2 = function (func){
    newArray = new Array()
    for(let i = 0; i < this.length; i++){
        newArray.push(func(this[i]))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis de cor", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
    '{"nome": "Muchila", "preco": 30.60}',
]
resultado = carrinho.map2(n => JSON.parse(n).preco)
console.log(resultado)