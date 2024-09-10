let dia = 10


// switch(dia){
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda')
//         break
//     case 3:
//         console.log('Terça')
//         break
//     default:
//         console.log('Número inválido')
    
// }

const nota = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notaMenor = []
// for (let i = 0; i < nota.length; i++){
//     if (nota[i] < 7)
//         notaMenor.push(nota[i])
// } 

nota.forEach( n => {
    if(n < 7)
        notaMenor.push(n)
})

notaMenor.forEach(n => console.log(n))