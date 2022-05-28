const TODO_LIST = "todoList";

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST);

    let todoList = []
    if (todoListString) {
        todoList = JSON.parse(todoListString)
    }
    return todoList
}

export default {
 
    getTodoList
    
}