const form = document.querySelector('#form-num')

form.addEventListener('submit', event => {
    //impede o envio tradicional do formulário
    event.preventDefault()

    //obtem dados do formulário
    // const data = Object.fromEntries(new FormData(event.target).entries())
    const numbers = new FormData(event.target)
    let res = document.getElementById("res")
    let n1 = Number.parseInt(numbers.get('n1'))
    let n2 = Number.parseInt(numbers.get('n2'))
    let soma = n1 + n2

    if(soma < 10){
        res.innerText = soma
        res.style.background = 'green'
    }else if(soma > 10 && soma < 20){
        res.innerText = soma
        res.style.background = 'orange'
    }else if(soma >= 20){
        res.innerText = soma
        res.style.background = 'red'
    }
})