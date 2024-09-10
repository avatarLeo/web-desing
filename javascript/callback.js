let nem = [5, 6, 8, 4, 10]
function nome(){
    console.log('função normal')
}


// função anonima
const func2 = function (params) {
    console.log('oi')
}

// arrow function
const func1 = () => {
    console.log('Olá, Mundo')
}

const func3 = () => console.log('oi')

const soma = (n1, n2) => {
    console.log(n1 +n2)
}

nem.forEach(n => console.log(n * 2))