const todoInputBox = document.querySelector('#todo-input')
const todolistContainer = document.querySelector('#todolist-container')

let todos = []
showTodos()

function addTodo() {
    const title = todoInputBox.value
    if (title.length > 0) {
        const todo = {
            title,
            id: Date.now().toString()
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
        showTodos()
    }
    todoInputBox.value = ''
}

function completed(todoId, element) {
    const title = document.querySelector(`#title${todoId}`)
    if (element.checked)
        title.classList.add('strike')
    else
        title.classList.remove('strike')
}

function todoToHTMl(todo) {
    return ` <div class="form-group todo" id="${todo.id}">
                    <p class="todo-title" id="title${todo.id}">${todo.title}</p>
                    <input class="completed icon" type="checkbox" 
                    onclick="completed(${todo.id}, this)">
                    <i class="fa fa-trash icon" onclick="deleteTodo('${todo.id}')"></i>
             </div>
    `
}

function showTodos() {
    todos = JSON.parse(localStorage.getItem('todos'))
    if (todos == null) todos = []
    let todosHTML = todos.map(todo => todoToHTMl(todo))
    todolistContainer.innerHTML = todosHTML.join('')
}

function deleteTodo(todoId) {
    let todoIndex = todos.findIndex(todo => todo.id == todoId)

    if (confirm(`Are you sure you want to delete todo : [ ${todos[todoIndex].title} ] ?` )) {
        todos.splice(todoIndex , 1)
        localStorage.setItem('todos', JSON.stringify(todos))
        showTodos()
    }
}

function clearAll() {
    todos = []

    if (confirm('Are you sure you want to delete all todos?')) {
        localStorage.removeItem('todos')
    }
    showTodos();
}
