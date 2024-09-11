let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)
// metodo para colocar em ordem alfabetica
aprovados.sort()
console.log(aprovados)

// deleta e deixa um espaço vasiuf
delete aprovados[1]
console.log(aprovados)

// podemos remover e adicionar elementos
aprovados.splice(1, 1, 'Jão')

console.log(aprovados)

