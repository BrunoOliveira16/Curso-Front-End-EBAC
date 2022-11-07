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


// Função de verificação de campos em branco
function isEmpty(elem){
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : "" 
};

// Função para envio do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let msg = [];
    let markup = "";

    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        if(fieldState)
            msg.push(fieldState);
    })

    // Validação email
    const isEmail = validaEmail(email);
    if(isEmail) msg.push(isEmail);

    // Validação CEP
    const isCEP = validaCEP(cep);
    if(isCEP.length > 0){
        msg.push(isCEP);
    }

    msg.forEach(item => {
        markup += `<p>${item}</p>`
    });

    mensagem.innerHTML = markup;
});


// Funções de Validação dos campos
function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? "" : `Digite um <strong>e-mail</strong>válido`;
};

function validaCEP(elem){
    if (!elem.value.match(/^[0-9]{8}/))
        return `Digite um CEP válido.`;
    else return "";
};

// Consumo de API correios para aquisição de dados
cep.addEventListener('focusout',()=>{
    
    const script = document.createElement("script");
    script.src = "https://viacep.com.br/ws/" + cep.value + "/json?callback=updateAdress";
    document.body.appendChild(script);

});

function updateAdress(data) {
    if( !('erro' in data)) {
        rua.value=(data.logradouro);
        bairro.value=(data.bairro);
        cidade.value=(data.localidade);
        uf.value=(data.uf);
        mensagem.innerHTML = '';
    } else {
        mensagem.innerHTML = `CEP não encontrado`;
    }
}


// Limpar campos do formulário
form.addEventListener('submit', () => {
    nome.value = ""
    email.value = ""
    cpf.value = ""
    cep.value = ""
    rua.value = ""
    cidade.value = ""
    bairro.value = ""
    uf.value = ""
})