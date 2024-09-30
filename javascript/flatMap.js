const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome: "Gustavo",
        nota: 8.1
    },{
        nome: "Ana",
        nota: 9.3
    }]
},{
    nome: "turma M2",
    alunos: [{
        nome: "Rebeca",
        nota: 8.9
    }, {
        nome: "Roberto",
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaturma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaturma)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaturma)
console.log(notas1)

console.log(notas2)