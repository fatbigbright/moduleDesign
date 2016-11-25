require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'todo': 'model.todo'
  }
});

define(['jquery', 'todo'], function($, Todo){
    function TodoFormView($el){
        this.$el = $el;
        this.$input = this.$el.find('input[type="text"]');
        this.$el.submit(this.onsubmit.bind(this));
    }

    TodoFormView.prototype.onsubmit = function(e){
        e.preventDefault();
        Todo.add(this.$input.val());
    };

    return TodoFormView;
});