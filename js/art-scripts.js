(function() {
  var addBox, generateRandomColor, interval;

  generateRandomColor = function() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  addBox = function() {
    return $('body').append('<div class="box" style="background-color:' + generateRandomColor() + '"></box>');
  };

  interval = window.setInterval(function() {
    addBox();
    if ($('.box').length > 1000) {
      return clearInterval(interval);
    }
  }, .5);

  $(this).on('click', function() {
    return clearInterval(interval);
  });

}).call(this);
