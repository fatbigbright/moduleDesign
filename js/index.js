//http://hokaccha.github.io/slides/javascript_design_and_test
require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'todoForm': 'view.todoForm',
    'todoList': 'view.todoList'
  },
  map: {
    '*': {
      'css': '../bower_components/require-css/css.min'
    }
  },
  shim: {
    'jquery': ['css!../css/default.css']//load default.css before jquery
  }
});

require(['jquery', 'todoForm', 'todoList'], function($, TodoFormView, TodoListView){
  $(document).ready(function(){
    new TodoFormView($('form.todoForm'));
    new TodoListView($('ul.todoList'));
  });
});
