var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo form', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call handleAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = "Do something";
    TestUtils.Simulate.submit($el.find('form')[0]);
    
    expect(spy).toHaveBeenCalledWith("Do something");
  });

  it('should not call handleAddTodo if invalid text entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);
    
    expect(spy).toNotHaveBeenCalled();
  });
});