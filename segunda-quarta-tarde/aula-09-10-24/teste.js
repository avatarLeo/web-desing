const caixa = document.querySelector('.caixa')

const form = document.getElementById('form')

function entrar(nome, senha){
    let body = document.getElementsByTagName('body')[0]
    if(nome == 'tarcio' && senha == '123'){
        body.style.background = 'blue'
    }else{
        // document.write('<h1>Senha incorreta</h1>')
        body.style.background = 'red'
    }
}


function login(event){
    event.preventDefault()
    const data = new FormData(event.target)
    const nome = data.get('nome')
    const senha = data.get('senha')
    entrar(nome, senha)
}

form.addEventListener('submit', login)


caixa.addEventListener('click', event => {
    document.write('Alguma coisa')
})