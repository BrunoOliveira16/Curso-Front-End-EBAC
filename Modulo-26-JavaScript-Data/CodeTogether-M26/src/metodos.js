let games = [
    {
        id: 1,
        titulo: 'God of War',
        plataforma: ['Playstation', 'PC'],
        genero: 'Ação',
        ano: '2018',
        publisher: 'Santa Monica Studios',
        online: 'Não',
        preco: 299.99

    },
    {
        id: 2,
        titulo: 'Red Dead Redemption 2',
        plataforma: ['Playstation', 'PC', 'X-Box One'],
        genero: 'Ação',
        ano: '2018',
        publisher: 'Rockstar',
        online: 'sim',
        preco: 299.99
    },
    {
        id: 3,
        titulo: 'Gears 5',
        plataforma: ['PC', 'X-Box One'],
        genero: 'Tiro Terceira pessoa',
        ano: '2019',
        publisher: 'The Coalition',
        online: 'sim',
        preco: 199.99
    },
    {
        id: 4,
        titulo: 'Resident Evil 2',
        plataforma: ['Playstation', 'PC', 'X-Box One'],
        genero: 'Survival Horror',
        ano: '2019',
        publisher: 'Capcom',
        online: 'sim',
        preco: 249.99
    },
    {
        id: 5,
        titulo: 'Mortal Kombat 11',
        plataforma: ['Playstation', 'PC', 'X-Box One', 'Nintendo Switch'],
        genero: 'Luta',
        ano: '2019',
        publisher: 'NetherRealm Studios',
        online: 'sim',
        preco: 249.99
    },
];


//Utilizando método filter para filtrar um array de objetos através de valor específico
let filterGames = games.filter ((element => {
    return element.genero === 'Luta'
}));
console.log(filterGames);

//Utilizando método forEach para filtrar elemento especifico de um array de objetos
let toPrint = ''
filterGames.forEach(titulo => {
    toPrint += titulo.titulo
});
console.log(toPrint);


//Utilizando método Map para unir valores de um array de objetos
let generos = games.map((element => {   
    return `${element.titulo} jogo de ${element.genero} lançado em ${element.ano}`;
}));
console.log(generos);


//Utilizando método reduce para somar os valores de um array de objetos
let Total = games.reduce((prev, next) => {
   return {preco: prev.preco + next.preco}
});
console.log(Total)

//Utilizando método reduce para contar os valores de um objetos especifico dentro de um array
const contagem = games.reduce((cont, plataform) => {
    cont[plataform.plataforma] = (cont[plataform.plataforma] || 0) + 1;
    return cont;
}, {})
console.log(contagem)

//Utilizando o método reduce para extrair apenas as informações de platformas do array, com um laço forEach fazendo o push em cada valor no array aninhado para o prev.
const consoles = games.reduce((prev, next) => {
    next.plataforma.forEach( element => {
        prev.push(element);
    })
    return prev;
}, [])
console.log(consoles)

//Contando os itens do array criado anteriormente "consoles" com o método reduce
const contar = consoles.reduce((contador, plataformas) => {
   contador[plataformas] = (contador[plataformas] || 0) + 1;
   return contador;
}, {})
console.log(contar)
