function adicionaClasse(seletor){
    let element = document.querySelectorAll(seletor)
    element = Array.from(element)
    element.forEach(e => e.classList.add('nova-div'))
}

function removeClasse(seletor){
    let element = document.querySelectorAll(seletor)
    element = Array.from(element)
    element.forEach(e => e.classList.remove('nova-div'))
}

function adicionaImg(path){
    let img = document.querySelector('#imagem')
    img.classList.toggle
    img.appendChild
    img.setAttribute('src', path)
}
adicionaImg('contact.png')
adicionaClasse('div')

// removeClasse('div')

