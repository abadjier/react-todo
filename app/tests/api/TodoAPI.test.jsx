var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  // Mocha method that gets called before each test 
  beforeEach(() => {
    // clean out localStorage
    localStorage.removeItem('todos');
  });

  it('should exist', () =>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      TodoAPI.setTodos(todos);    // save array to localStorage
      var actualTodos = JSON.parse(localStorage.getItem('todos'));  // retrieve what was stored in localStorage

      expect(actualTodos).toEqual(todos); // toEqual compares the values ontwo objects or arrays (not that they are identical in memory)
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});