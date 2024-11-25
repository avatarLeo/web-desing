let img1 = 'img/menu.png'
let img2 = 'img/close.png'
function mudaImagen(){
    const img = document.getElementById('img')

    if(img.getAttribute('src') == img1){
        img.setAttribute('src', img2)
    }else{
        img.setAttribute('src', img1)
    }


}
    
function move(){
    const div = document.querySelector('.element')
    div.classList.toggle('move')
}