let botao = document.getElementsByClassName('botao')[0]
botao.addEventListener('click', isChecked)


function isChecked(){
    let check = document.getElementById('checkImg')
    let img = document.getElementById('imagem')
    if(check.checked){
        img.setAttribute('src', '')
    } else{
        img.setAttribute('src', 'coracao.png')
    }
}
 
