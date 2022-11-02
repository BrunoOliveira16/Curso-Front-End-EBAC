//import fetch from 'node-fetch'

    let _data = {
        title: "teste de envio",
        body: "lorem ipsum sit dolor amet consecutr",
        userId: 5
    }

const postContainer = document.getElementById('posts')
let postMarkup = ''

function setPost(data) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => console.log(error))
}

function getPost () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => {
        data.map(function(post){
            postMarkup += `
                <div class="posts-item" id="post-${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        })
        postContainer.innerHTML = postMarkup
    })
    .catch(error => console.log(error))
}

getPost()