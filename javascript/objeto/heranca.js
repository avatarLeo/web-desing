const ferrari = {
    modelo: 'f40',
    vloMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__  === Object.prototype)
console.log(Object.prototype.__proto__)