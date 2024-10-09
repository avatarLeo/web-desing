//lista de eventos
//https://desenvolvimentoparaweb.com/javascript/eventos-javascript/

//animação com scroll
//https://matheusmisumoto.dev/tecnologia/desenvolvimento-web/animacao-scroll-javascript-vanilla.html

//observer
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// const box = document.getElementById('box')

// box.addEventListener('click', event => {
//     let c = event.target
//     c.style.background = 'red'
//     // document.write(c)
// })

// const texts = document.getElementsByClassName('text')
// // texts[0].style.animation = 'slidein 4s'



// window.addEventListener('scroll', e => {
//     const body = document.querySelector('.box-text')
//     body.style.animation = 'slidein 4s'
// })

// p = Object.values(texts)
// p.forEach(texts => {
//     texts.addEventListener('click', e => {
//         let t = e.target
//         t.style.animation = 'slidein 4s'
//     })
// });


// t.forEach(e => e.style.animation = 'slidein 4s')
// let t = Object.values(texts)

function scrollTrigger(selector, animation, options = {threshold: 0.1}){
    let els = document.querySelector(selector)
    els = Array.from(els)
    els.forEach(element => {
        addObserver(element, animation, options)
    });
}

function addObserver(element, animation, options){
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.removeAttribute('style')
                entry.target.classList.add(animation)
                observer.unobserve(entry.target)
            } else if(!entry.isVisible){
                entry.target.style.opacity = '0'
            }
        })
    }, options)
    observer.observe('texts')
}