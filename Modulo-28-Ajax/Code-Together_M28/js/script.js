const url = 'https://api.github.com/users';
const main = document.getElementById('main')
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
            <div class="container-user">
                <div class="box-img">
                    <img src="${data.avatar_url}" alt="avatar">
                </div>
                <div class="box-info">
                    <h1>${data.name}</h1>
                    <h3>Repositórios:${data.public_repos}</h3> 
                </div>
            </div>`
            main.innerHTML = text
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}

const setUser = document.getElementById('username')

setUser.addEventListener('click', function userSubmit(event){
    getUser(event.target.value)
    console.log(setUser)
})

