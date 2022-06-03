import ls from './ls.js';
import util from './utils.js';

// select DOM elements for views
// Select input form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the todo list items
const todoItemsList = document.querySelector('.todo-items');
// Select tasks still todo
const outStandg = document.querySelector('.tasksTodo');

// Get array of todoList
// let todoList = ls.getTodoList;
let todoList = [];

// Add eventlisterner for input submission
todoForm.addEventListener('submit', function(event) {
  // prevent default event on click
  event.preventDefault();
  // Call addNewTodo function
  addNewTodo(todoInput.value); 
});

// function to add todo
// Check empty submission
function addNewTodo(task) {
  if (task == '') {
    alert("Enter your task in the input and them click add")
    
  } else {
    // Add tod to localStorage
    const todo = {id: Date.now(), name: task, completed: false};
    todoList.push(todo);
    addToLocalStorage(todoList); 

    // Clear input box
    todoInput.value = '';
  }
}


// function to load todoList 
function loadTodos(todos) {
  // Reset DOM for todoList
  todoItemsList.innerHTML = '';

  // Check each todo and update checked to completed
  todoList.forEach(function(todo) {
    // check if the item is completed
    const checked = todo.completed ? 'checked': null;

  //  Create List items for todo
  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.setAttribute('data-key', todo.id);
  // if item is completed,'checked' class for use in add line-through style
  if (todo.completed === true) {li.classList.add('checked');}
  li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>${todo.name}<button class="delete-button">X</button>`;
  // Add todo to todoDiv
  todoItemsList.append(li);
  });

}

// function to add todos to localstorage
function addToLocalStorage(todos) {
  // Stringify todoList
  localStorage.setItem('todos', JSON.stringify(todos));
  // loadTodo List
  loadTodos(todos);
}

// function to get everything from localstorage
function getLocaStorage() {
  const todo = localStorage.getItem('todos');
  // if todo exists
  if (todo) {
    // converts back to array and store it in todos array
    todoList = JSON.parse(todo);
    loadTodos(todoList);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
  todoList.forEach(function(todo) {
    if (todo.id == id) {
      // toggle the value
      todo.completed = !todo.completed;
    }
  });
  // update localStorage
  addToLocalStorage(todoList);
}

// Function to deleteTodo
function deleteTodo(id) {
  // filters the todo with id parameter
  todoList = todoList.filter(function(todo) {
    return todo.id != id;
  });
  // update the localStorage
  addToLocalStorage(todoList);
}

// iGet any existing items in localStorage
getLocaStorage();

// Add evenetListener to List items
todoItemsList.addEventListener('click', function(event) {
  // check checkbox click and toggle todo completed
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key and deleteRodo
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
  // Update tasks still outstanding todo
  const undone = util.stillTodo(todoList);
  outStandg.innerHTML = `Tasks left: <u>${undone}</u>`
});

const filterOptions = document.querySelector(".filter-todos");
filterOptions.addEventListener("change", filterTodos);
function filterTodos(e) {
  e.preventDefault();
  const todos = todoItemsList.childNodes;
  todos.forEach(function(todo) {
    if (todo.nodeName === "LI") {
      switch (e.target.value) {
        case "all":
          todo.style.display = "block";
          break;
        // Filter Completed tasks
        case "completed":
          if (todo.children[0].checked) {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;
          // filter Active or stillTodo Tasks
        case "active":
          if (todo.children[0].checked) {
            todo.style.display = "none";
          } else {
            todo.style.display = "block";
          }
          break;
      }
    }
  });
}