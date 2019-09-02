const inputElement = document.getElementById('novoItem')
const buttonElement = document.getElementById('add')
const listIncompleto = document.getElementById('lista-incomp')
const listCompleto = document.getElementById('lista-comp')
const contFazer = document.getElementById('fazer')
const contFeitas = document.getElementById('feitas')

const todos = ['Fazer café', 'Estudar', 'Dormir']
const finalizados = []

function renderTodos() {
    listIncompleto.innerHTML = ''
    listCompleto.innerHTML = ''
    contFazer.innerHTML = ''
    contFeitas.innerHTML = ''
    for (todo of todos) {
        let posTodo = todos.indexOf(todo)
        let listElement = document.createElement('div')   // cria um parágrafo onde estará o checkbox
        listElement.setAttribute('onclick', `marcarTarefa(${posTodo})`)
        listElement.setAttribute('class', 'item-lista')
        let todoBox = document.createElement('input')  // cria e define o checkbox
        todoBox.setAttribute('type', 'checkbox')
        todoBox.setAttribute('class', 'box')
        todoBox.setAttribute('id', `i${posTodo}`)
        let itemLabel = document.createElement('label') // cria e define o label para o checkbox
        itemLabel.setAttribute('for', todoBox.id)
        itemLabel.innerHTML = todo

 
        listElement.appendChild(todoBox)
        listElement.appendChild(itemLabel)
        listIncompleto.appendChild(listElement)
    }   
    for (finalizado of finalizados) {
        let posFinalizado = finalizados.indexOf(finalizado)
        let listElement = document.createElement('div')   // cria um parágrafo onde estará o checkbox
        listElement.setAttribute('onclick', `desmarcarTarefa(${posFinalizado})`)
        listElement.setAttribute('class', 'item-lista')
        let compBox = document.createElement('input')  // cria e define o checkbox
        compBox.setAttribute('type', 'checkbox')
        compBox.setAttribute('class', 'box')
        compBox.setAttribute('id', `i${posFinalizado}`)
        compBox.setAttribute('checked', 'true')
        let itemLabel = document.createElement('label') // cria e define o label para o checkbox
        itemLabel.setAttribute('for', compBox.id)
        itemLabel.innerHTML = finalizado

        listElement.appendChild(compBox)
        listElement.appendChild(itemLabel)
        listCompleto.appendChild(listElement)
    }
    if (todos.length === 1) {
        contFazer.appendChild(document.createTextNode(`${todos.length} Tarefa`))
    } else {
        contFazer.appendChild(document.createTextNode(`${todos.length} Tarefas`))
    }  
    if (finalizados.length === 1) {
        contFeitas.appendChild(document.createTextNode(`${finalizados.length} Finalizada`)) 
    } else {
        contFeitas.appendChild(document.createTextNode(`${finalizados.length} Finalizadas`))
    }
}

function addItem() {
    todos.push(inputElement.value)
    renderTodos()
    inputElement.value=''
}

function marcarTarefa(pos) {
    finalizados.push(todos[pos])
    todos.splice(pos, 1)
    renderTodos()
}

function desmarcarTarefa(pos) {
    todos.push(finalizados[pos])
    finalizados.splice(pos, 1)
    renderTodos()
}

buttonElement.onclick = addItem
renderTodos()