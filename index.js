// Your code here
//VARIABLES
const addForm = document.querySelector('#addToDo');
const toDOList = document.querySelector('#todolist');
let list = document.querySelectorAll('li')

//EVENT LISTENERS

eventListeners();
function eventListeners() {
    addForm.addEventListener('blur', addTask)
    toDOList.addEventListener('click', deleteTask)
    addForm.addEventListener('keydown', intro)

}



//FUNCIONES
function intro (e){
    if(e.keyCode=='13'){
        addTask(e)
    }
}

function addTask(e) {
    if(addForm.value!== ''){
        const newElement = document.createElement('li')
        newElement.innerHTML = `<span><i class="fa fa-trash"></i></span>${e.target.value}`
        toDOList.appendChild(newElement);
        list = document.querySelectorAll('li')
        addForm.value= '';
    }
 
}
function deleteTask(e) {
console.log(e.target.parentElement)
    //console.log(e.target.parentNode.removeChild())
    if (e.target.parentElement.id === "todolist") {
        e.target.remove();
    } else if (e.target.parentElement.parentElement.id === "todolist"){
        e.target.parentElement.remove();
    } else if (e.target.className === "fa fa-trash"){
        e.target.parentElement.parentElement.remove();
    }

}

