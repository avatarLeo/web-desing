
const observer = new IntersectionObserver( entries => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach(element => {
    observer.observe(element)
})

// observer.observe(lastSection)