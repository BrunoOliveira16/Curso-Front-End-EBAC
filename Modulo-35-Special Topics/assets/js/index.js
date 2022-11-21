function dragStart(event){

    console.log(event.dataTransfer);

    event.dataTransfer.setData('text/plain', event.target.id);

    event.currentTarget.style.backgroundColor = 'gray';

}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    console.log(id);
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();

}

// window.addEventListener('DOMContentLoaded', () => {

//     let drag = document.querySelector('.draggable');

//     drag.addEventListener('dragstart', dragStart);

// })