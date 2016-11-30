var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  

  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return todos.map((todo) =>{
        return (
          // when iterating over array and generating multiple instances of a component, need to give them unique key prop
          // used internally by React to keep track of each component
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> // the spread operater creates a prop for every property on the object
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;