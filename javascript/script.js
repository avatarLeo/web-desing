function rotate(){
    let div = document.getElementsByTagName('div')[0]
    let img = document.getElementsByTagName('img')[0]
    img.setAttribute('src', '../html.png')
    if(div.getAttribute('class') == 'rigth' || div.getAttribute('class') == null)
        div.setAttribute('class', 'left')
    else{
        div.setAttribute('class', 'rigth')
    }
}