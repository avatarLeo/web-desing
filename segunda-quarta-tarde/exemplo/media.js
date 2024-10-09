const form = document.getElementById('media')

function tirarMedia(n1,n2,n3){
    return (n1 + n2 +n3) / 3
}

function media(event){
    event.preventDefault()
    let numeros = new FormData  (event.target)
    let nota1 =  Number.parseFloat(numeros.get('n1'))
    let nota2 =  Number.parseFloat(numeros.get('n2'))
    let nota3 =  Number.parseFloat(numeros.get('n3'))
    resposta = document.querySelector('#res')
    let media = tirarMedia(nota1, nota2, nota3)
    resposta.innerText = media

    let body = document.querySelector('body')
    if(media < 7)
        body.style.background = 'red'
    else if(media > 7 && media < 9)
        body.style.background = 'orange'
    else
        body.style.background = 'green'
}

form.addEventListener('submit', media)