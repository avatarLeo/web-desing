function menu(){
    let menu = document.getElementById('menu-lateral')
    let check = document.getElementById('menu')
    let imgMenu = document.getElementById('img-menu')
    if(!check.checked){
        menu.classList.add('surgir')
        imgMenu.setAttribute('src', '../img/close.png')
    }else{
        menu.classList.remove('surgir')
        imgMenu.setAttribute('src', '../img/menu.png')
    }
}

let botao = document.getElementById('botao-menu')

botao.addEventListener('click', menu)