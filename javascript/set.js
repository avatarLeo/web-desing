const times = new Set()//essa estrutura não aceita repetição
times.add('vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthinhas')
times.add('Flamengo')
times.delete('Flamengo')
times.add('Vasco')
console.log(times.size)
console.log(times.has('Vasco'))

console.log(times)
