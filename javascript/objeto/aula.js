const pessoa = {
    nome: 'Gabriel',
    estado: 'viva',
    altura: 1.70,
    _idade: 16, //convenção
    deficiencia: false,
    trabalhar: function (){
        console.log('Estou trabalhando...')
    },
    falar: function(){

        console.log(`Meu nome é ${this.nome},e minha idade é ${this.idade}`)
    }, 
    get idade(){
        return `Minha idade é ${this._idade}`
    },

    set idade(idade){
        if (idade > 0 && idade < 150)
            this._idade = idade
    } 
}

const conta = {
    _saldo: 0,
    get saldo(){
        return this._saldo
    }, 
    set saldo(saldo){
        if(saldo > 0)
            this._saldo = saldo
    } 
}

conta.saldo = -100
conta.saldo = 100
conta.saldo = 200
conta.saldo = -300

console.log(conta.saldo)
