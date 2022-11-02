
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
//let user = 'BrunoOliveira16'
let text = ''

function getUser(user){

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text += `
            <div>
                <h3>${data.name} possui ${data.public_repos} repositórios públicos no GitHub</h3>
                <img src="${data.avatar_url}" alt="avatar">
            </div><br/>`
            main.innerHTML = text
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})
