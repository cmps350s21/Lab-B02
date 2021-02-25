const todoInputBox = document.querySelector('#todo-input')
const addTodo = document.querySelector('#add-todo')
const todolistContainer = document
    .querySelector('#todolist-container')

let todos = []
loadTodos();
addTodo.onclick = () => {
    if (todoInputBox.value.length > 0) {
        let todo = {
            title: todoInputBox.value,
            id: `id${Date.now()}`
        }
        todos.push(todo)
        showTodos()
    }
}

function loadTodos() {
    todos = JSON.parse(localStorage.getItem('todos'))
    if (todos == null)
        todos = []

    showTodos();
}

function showTodos() {
    const todosHTML = todos.map(todo => todoToHTMLDiv(todo))

    todolistContainer.innerHTML = todosHTML.join('')
    todoInputBox.value = ''
    localStorage.setItem('todos', JSON.stringify(todos))
}
function todoToHTMLDiv(todo) {
    return `<div class="form-group todo" id="${todo.id}">
                    <p class="todo-title" id="title${todo.id}">${todo.title}</p>
                    <input class="completed icon" type="checkbox" 
                    onclick="completed(${todo.id}, this)">
                    <i class="fa fa-trash icon" onclick="deleteTodo(${todo.id})"></i>
             </div>`
}

function completed(todoId, element) {
    const title = document.querySelector(`#title${todoId}`)
    if (element.checked)
        title.classList.add('strike')
    else
        title.classList.remove('strike')
}


function deleteTodo(id) {
    console.log(id)
    todos = todos.filter(todo => todo.id != id)
    showTodos()
}

function clearAll() {
    todos = []
    showTodos()
}