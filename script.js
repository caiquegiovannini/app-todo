var inputElement = document.getElementById('novoItem')
const buttonElement = document.getElementById('add')
const list = document.getElementById('lista')

const todos = ['Fazer café', 'Estudar', 'Dormir']

function renderTodos() {
    list.innerHTML = ''
    for (todo of todos) {
        var listElement = document.createElement('p')   // cria um parágrafo onde estará o checkbox
        var todoItem = document.createElement('input')  // cria e define o checkbox
        todoItem.type = "checkbox"
        todoItem.id = todos.indexOf(todo)
        todoItem.className = 'box'
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

renderTodos()