const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    let menorSalario = funcionarios[12]
    funcionarios.forEach(element => {
        if(element.genero == 'F' && element.pais == 'China' && menorSalario.salario > element.salario)
            menorSalario = element
    });
    console.log(menorSalario)
})

//segunda solução
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const mSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(res => {
    const funcionario = res.data
    const p = funcionario.filter(chineses).filter(mulheres).reduce(mSalario)
    console.log(p, '2')

})