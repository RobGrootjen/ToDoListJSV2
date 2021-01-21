let addToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('todocontainer');
let inPutField = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inPutField.value;
    toDoContainer.appendChild(paragraph);
})