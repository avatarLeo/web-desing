const menu = document.querySelector('.menu')
console.log(menu.getAttribute('class'))

menu.addEventListener('click', event => {
    const links = document.querySelector('#links-menu')
    const icomMenu = document.querySelector('#icom-menu') 
    if(links.getAttribute('class') == 'sem-menu'){
        links.setAttribute('class','com-menu')
        icomMenu.setAttribute('src', 'img/close.png')
    }
    
    else{
        links.setAttribute('class','sem-menu')
        icomMenu.setAttribute('src', 'img/menu.png')
    }
})