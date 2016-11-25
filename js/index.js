//http://hokaccha.github.io/slides/javascript_design_and_test
require.config({
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min'
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
require(['jquery'], function($){
  $(document).ready(function(){
    var form = $('form.todoForm');
    var input = form.find('input#txtItem');
    var list = $('ul.todoList');
    var usual = $('ul.usualList li');

    function addList(text){
      var html = '<li><input type="checkbox">' + text + '</li>';
      var li = $(html);
      li.find('input[type="checkbox"]').change(function(){
        $(this).closest('li').toggleClass('complete');
      });

      list.append(li);
    };

    usual.click(function(e){
      e.preventDefault();
      var text = $(this).text();
      addList(text);
    });

    form.submit(function(e){
      e.preventDefault();
      var text = input.val();
      addList(text);
    });
  });
});
