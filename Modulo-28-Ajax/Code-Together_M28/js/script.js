const url = 'https://api.github.com/users';
const main = document.getElementById('main');
const btnSubmit = document.getElementById('search');
const input = document.getElementById('username');
let text = '';

// Função para buscar dados da API do GitHub
btnSubmit.addEventListener('click', (user) => {
    if (input.value !== ""){
       user = (input.value)
    }

    fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        text += `
        <div class="container-user">
            <div class="box-img">
                <img src="${data.avatar_url}" alt="avatar">
            </div>

            <div class="container-info">
                <div class="box-name">
                    <h1>${data.name}</h1>
                    <p>${data.html_url}</p>
                </div>
                <div class="container-data">
                    <div class="box-info">
                        <h3>Repos</h3>
                        <h2>${data.public_repos}</h2>   
                    </div>
                    <div class="box-info">
                        <h3>Followers</h3> 
                        <h2>${data.followers}</h2>   
                    </div>
                    <div class="box-info">
                        <h3>Following</h3>
                        <h2>${data.following}</h2>   
                    </div>      
                </div>
                <div class="box-subinfo">
                    <h3>${data.location}</h3>
                    <h3>${data.company}</h3>
                </div>
            </div>    
        </div>`
        main.innerHTML = text
    })
    .catch((error) => console.error('Erro: ', error.message || error))
});

// Limpar campo de busca
btnSubmit.addEventListener('click', () => {
    (document.getElementById('username').value = "")
})