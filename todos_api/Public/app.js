$(document).ready(function() {
  $.getJSON('/api/todos').then(addTodos);

  $('#todoInput').keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });
});

function addTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name + '</li>');
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}

function createTodo() {
  var usrInput = $('#todoInput').val();
  $.post('/api/todos', { name: usrInput })
    .then(newTodo => {
      addTodo(newTodo);
      $('#todoInput').val('');
    })
    .catch(err => {
      console.log(err);
    });
}
