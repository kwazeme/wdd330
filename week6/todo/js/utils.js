import ls  from "./ls.js";

// Get the todoList itmes
// todos = ls.getTodoList

function stillTodo(todo) {
    const totalTodos = todo.length;
    let completedTodos = 0;
    // Count number of completed todos.
    todo.forEach(function(todos) {
      if (todos.completed === true) {
        completedTodos++;
      }
      
    })
    return (totalTodos - completedTodos)
  }






export default {
    stillTodo
   
}