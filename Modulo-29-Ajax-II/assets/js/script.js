const form = document.querySelector("#form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");
const mensagem = document.querySelector("#mensagem");
const notNull = document.getElementsByClassName("not-null");

function isEmpty(elem){
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : "" 
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let msg = [];
    let markup = "";

    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        if(fieldState)
            msg.push(fieldState);
    })

    msg.forEach(item => {
        markup += `<p>${item}</p>`
    });

    mensagem.innerHTML = markup;
})


