let section = document.getElementsByClassName('acordion')

section = Array.from(section)
section.forEach(element => {
    element.addEventListener("click", function(e) {
        this.classList.toggle('active')

        let panel = this.nextElementSibling
        if(panel.style.display === 'block'){
            panel.style.display = 'none'
            this.children[1].style.animation = 'spinning 1s forwards'
        }else{
            panel.style.display = 'block'
            this.children[1].style.animation = 'spinning 1s forwards'
        }
    })
});