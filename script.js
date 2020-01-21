const inputElement = document.getElementById('novoItem')
const buttonElement = document.getElementById('add')
const listaIncompleto = document.getElementById('lista-incomp')
const listaCompleto = document.getElementById('lista-comp')
const listaTarefasCont = document.getElementById('todos')
const listaFeitasCont = document.getElementById('finalizados')

const todos = JSON.parse(localStorage.getItem('list_todos')) || []
const finalizados = JSON.parse(localStorage.getItem('list_finalizados')) || []
const lists = [todos, finalizados]

function renderTodos() {
    listaIncompleto.innerHTML = ''
    listaCompleto.innerHTML = ''
    listaFeitasCont.innerHTML = ''
    listaTarefasCont.innerHTML = ''

    for (let list of lists) {
        for (let todo of list) {
            let posTodo = list.indexOf(todo)
            let listElement = document.createElement('div')   // cria um parágrafo onde estará o checkbox
            listElement.setAttribute('class', 'item-lista')
            let todoBox = document.createElement('input')  // cria e define o checkbox
            todoBox.type = 'checkbox'
            todoBox.classList.add('box')
            todoBox.id = `i${posTodo}`
            let itemLabel = document.createElement('label') // cria e define o label para o checkbox
            itemLabel.innerHTML = todo
            let deleteButton = document.createElement('i') // cria botão de deletar
            deleteButton.classList.add('material-icons')
            deleteButton.innerHTML = 'delete'

            listElement.appendChild(todoBox)
            listElement.appendChild(itemLabel)
            listElement.appendChild(deleteButton)
            
            if (list == finalizados) {
                todoBox.checked = true
                todoBox.setAttribute('onclick', `desmarcarTarefa(${posTodo})`)
                deleteButton.setAttribute('onclick', `deleteTodo(finalizados, ${posTodo})`)
                listaCompleto.appendChild(listElement)
            } else if (list == todos) {
                todoBox.checked = false
                todoBox.setAttribute('onclick', `marcarTarefa(${posTodo})`)
                deleteButton.setAttribute('onclick', `deleteTodo(todos, ${posTodo})`)
                listaIncompleto.appendChild(listElement)
            }
        }

        if(list.length == 1) {
            if (list == finalizados) {
                listaFeitasCont.innerHTML = `${list.length} Finalizada`
            } else {
                listaTarefasCont.innerHTML = `${list.length} Tarefa`
            }
        } else {
            if (list == finalizados) {
                listaFeitasCont.innerHTML = `${list.length} Finalizadas`
            } else {
                listaTarefasCont.innerHTML = `${list.length} Tarefas`
            }
        }
    }
}

function addItem() {
    todos.push(inputElement.value)
    renderTodos()
    inputElement.value=''
    saveToStorage()
}

function marcarTarefa(pos) {
    setTimeout(() => {
        finalizados.push(todos[pos])
        todos.splice(pos, 1)
        renderTodos()
        saveToStorage()
    }, 500)
}

function desmarcarTarefa(pos) {
    setTimeout(() => {
        todos.push(finalizados[pos])
        finalizados.splice(pos, 1)
        renderTodos()
        saveToStorage()
    }, 500)
}

function deleteTodo(list, pos) {
    list.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
    localStorage.setItem('list_finalizados', JSON.stringify(finalizados))
}

buttonElement.onclick = addItem
renderTodos()
