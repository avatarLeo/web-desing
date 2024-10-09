const form = document.getElementById('soma')

form.addEventListener('submit', event => {
    event.preventDefault()

    let numeros = new FormData(event.target)
    let n1 = Number.parseInt(numeros.get('n1'))
    let n2 = Number.parseInt(numeros.get('n2'))
    let resposta = document.getElementById('res')
    resposta.innerText = n1 + n2
})