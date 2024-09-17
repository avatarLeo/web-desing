// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = {attr: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'A'}

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual += this.velMax
        }
    },

    status (){
        return `${this.velAtual} Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: '340'
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//defini uma herança
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(100)
console.log(ferrari.status())

volvo.acelerarMais(200)

console.log(volvo.status())