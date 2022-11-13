const btn = document.getElementById("btn");
const btn01 = document.getElementById("btn-01");

//Modificando função com a utilização de arrow functions
const obterMedia = ()=> {
    // captura dos valores dos inputs para as variaveis abaixo
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // const para calcular a media + método para reduzir casas decimais(toFixed) 
    const media = ((a + b + c)/3).toFixed(2);
    
    document.getElementById("resultado").innerHTML = "Resultado: " + media;
};

// Escutador de evento para limpar os campos após o submit
btn.addEventListener('click', (event)=> {
    event.preventDefault();

    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
});


const CalcularMedia = () => {
    // const para calcular a media + método para reduzir casas decimais(toFixed)
    let Nota01 = parseFloat(document.getElementById("N1").value);
    let Nota02 = parseFloat(document.getElementById("N2").value);
    let Nota03 = parseFloat(document.getElementById("N3").value);
    let Nota04 = parseFloat(document.getElementById("N4").value);
    const MediaNota = ((Nota01 + Nota02 + Nota03 + Nota04)/4).toFixed(2);

    // Condicional if/else para aprovado ou reprovado
    MediaNota.value >= 7 ? resultado = "Aprovado" : resultado = "Reprovado";

    document.getElementById("exibicao").innerHTML = "Media: " + MediaNota + " - " + resultado;
};

// Escutador de evento para limpar os campos após o submit
btn01.addEventListener('click', e => {
    e.preventDefault();

    document.getElementById("N1").value = "";
    document.getElementById("N2").value = "";
    document.getElementById("N3").value = "";
    document.getElementById("N4").value = "";
})
