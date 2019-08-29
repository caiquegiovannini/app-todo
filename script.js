const inputElement = document.getElementById('novoItem')
const buttonElement = document.getElementById('add')
const list = document.getElementById('lista')

const todos = ['Fazer café', 'Estudar', 'Dormir']

function renderTodos() {
    list.innerHTML = ''
    for (todo of todos) {
        var listElement = document.createElement('div')   // cria um parágrafo onde estará o checkbox
        listElement.className = "item-lista"
        var todoItem = document.createElement('input')  // cria e define o checkbox
        todoItem.type = "checkbox"
        todoItem.className = "box"
        todoItem.id = todos.indexOf(todo)
        var itemLabel = document.createElement('label') // cria e define o label para o checkbox
        itemLabel.htmlFor = todoItem.id
        itemLabel.innerHTML = todo
 
        listElement.appendChild(todoItem)
        listElement.appendChild(itemLabel)
        list.appendChild(listElement)
    }
}

function addItem() {
    todos.push(inputElement.value)
    renderTodos()
    inputElement.value=''
}

buttonElement.onclick = addItem
renderTodos()