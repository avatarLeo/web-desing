const num = [1, 3, 5, 7, 9, 10]

alunos = [
    {nome: "Jão", nota: 9.5, bolsista: true},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true},
    {nome: "Renata", nota: 9.5, bolsista: true},
    {nome: "Vanessa", nota: 9, bolsista: false},
]


const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})