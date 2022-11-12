//Modificando function com a utilização de arrow functions
const obterMedia = () => {
    // captura dos valores dos inputs para as variaveis abaixo
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    // const para calcular a media + método para reduzir casas decimais(toFixed) 
    const media = ((a + b + c)/3).toFixed(2);
    
    document.getElementById("resultado").innerHTML = "Resultado: " + media;
};


