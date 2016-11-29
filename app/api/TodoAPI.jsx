// file that knows how to save and fetch data from localStorage
var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    // use jQuery isArray method
    if ($.isArray(todos)) {
      
      // convery array to string using JS method JSON.stringify
      localStorage.setItem('todos', JSON.stringify(todos));

      // if data passed in is valid - return an array, else will return undefined by default
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    // use try/catch block, because JSON.parse only works with valid data or else breaks the program
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // the code inside of catch block fires if there is an error inside try block
      // no code here, no changes will be made if JSON.parse fails
    }

    // to protect against someone maliciously updating todos and passing wrong type of data
    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
    return $.isArray(todos) ? todos : []; 

  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted; // if showCompleted is true (checked) return all items, else return only not completed
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};