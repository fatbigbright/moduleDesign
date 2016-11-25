require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'backbone': '../bower_components/backbone/backbone-min'
  }
});
define(['jquery', 'underscore', 'backbone'], function($){
    function Todo(data){
        this.text = data.text;
        this.complete = !!data.complete;
    };

    $.extend(Todo.prototype, Backbone.Events);
    $.extend(Todo, Backbone.Events);

    Todo.prototype.setComplete = function(complete){
        this.complete = !!complete;
        this.trigger('change:complete', this);
    };

    Todo.list = [];
    Todo.add = function(text){
        var todo = new Todo({ text: text });
        Todo.list.push(todo);
        this.trigger('add', todo);
    };
    return Todo;
});