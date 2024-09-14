const carro = {
    modelo: 'A5',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numer: 123
        }
    }, 
    condutores: [{
        nome: 'Junior',
        idade: 19,
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDeSeguro: function(){
        //...
    }
}
//criando objetos
//usando a notação literal
const obj1 = {}

//Object em js
//apartir de uma função construtora
const obj2 = new Object

//criando a sua propria função construtora(definida por noiz)
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDescontto = () => {

    }
}

const p1 = new Produto('Caneta', 799, 0.55)

// fucao Factory
function criarFunction(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas
    }
}

//object 
const filha = Object.create(null)