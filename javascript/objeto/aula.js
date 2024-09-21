function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidade = function (){
        return velocidadeAtual
    }
}

const uno = new Carro
const ferrari = new Carro(340, 20)

uno.acelerar()
uno.acelerar()

ferrari.acelerar()
console.log( typeof uno)
console.log( typeof Carro)
