nota = [5.6, 7, 8, 9.5, 10,5.6]
function boletin(nota){
    nota.forEach(n => {
        if(n > 7)
            console.log(n)
    })
}
boletin(nota)