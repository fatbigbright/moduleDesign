require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'todo': 'model.todo'
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

define(['jquery', 'todo'], function($, Todo){
    function TodoListView($el){
        this.$el = $el;
        Todo.on('add', this.add.bind(this));
    }

    function TodoListItemView(todo){
        this.todo = todo;
        this.$el = $('<li><input type="checkbox">' + todo.text + '</li>');
        this.$checkbox = this.$el.find('input[type="checkbox"]');

        this.$checkbox.change(this.onchangeCheckbox.bind(this));
        this.todo.on('change:complete', this.onchangeComplete.bind(this));
    }

    TodoListItemView.prototype.onchangeCheckbox = function(){
        this.todo.setComplete(this.$checkbox.is(':checked'));
    };

    TodoListItemView.prototype.onchangeComplete = function(){
        if(this.todo.complete){
            this.$el.addClass('complete');
        } else {
            this.$el.removeClass('complete');
        }
        this.$checkbox.attr('checked', this.todo.complete);
    };

    TodoListView.prototype.add = function(todo){
        var item = new TodoListItemView(todo);
        this.$el.append(item.$el);
    };

    return TodoListView;
});