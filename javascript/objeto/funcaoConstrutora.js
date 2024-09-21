function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual =  function (){
        return velocidadeAtual
    }
}

const uno = new Carro
const ferrari = new Carro(320, 20)

uno.acelerar()
ferrari.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(ferrari.getVelocidadeAtual())
console.log(uno)