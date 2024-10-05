//Uma factory retorna um novo objeto

const { valor } = require("./instanciaUnica")

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}