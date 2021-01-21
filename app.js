let addToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('todocontainer');
let inPutField = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inPutField.value;
    toDoContainer.appendChild(paragraph);
    inPutField.value ="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})