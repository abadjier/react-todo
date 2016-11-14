var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// using object destructuring above, accomplishes the same as this:
//var Route = require('react-router').Route;

var TodoApp = require('TodoApp');


// load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>, 
  document.getElementById('app')     
);
