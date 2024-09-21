class Lancamento {
    constructor(nome = 'Generio', valor =  0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lamcamentos = []
    }

    addLancamento(...lamcamentos){
        lamcamentos.forEach(l => this.lamcamentos.push(l))
    }

    sumario(){
        let valorConsolidade = 0
        this.lamcamentos.forEach(l => {
            valorConsolidade += l.valor
        })

        return valorConsolidade
    }
}

const salario  = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)

contas.addLancamento(salario, contaDeLuz)

console.log(contas.sumario())