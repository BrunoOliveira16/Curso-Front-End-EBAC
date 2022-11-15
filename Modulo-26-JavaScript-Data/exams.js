import months from './months.js'

// Primeiro filtro da aula
/*let toPrint = months.filter(() => {
    return months.days === 31
})

console.log(toPrint)

document.getElementById('main').innerHTML = toPrint.month*/

//Filtra Meses
const filteredMonths = months.filter ( (months) => {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''

// Listagem
filteredMonths.forEach( month => {
    toPrint += month.month + ', '
});

let meses = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
});

console.log(sumMonthDays)

/* Map
let years = months.map( (month => {
    return month.days * 10
}))*/

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    toPrint + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> idade humana dos cachorros: '  
    + years + ' '