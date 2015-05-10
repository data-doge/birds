$(document).ready(function () {

  var y = 0;
  var min = 0;
  var max = 1000;

  $('span').on('click', function() {

    var i = min;
    y++;

    for (var x = 0; x < y; x++) {
      var $bird = $("<img class='bird' src='./media/bird.jpg'/>");
      $('body').append($bird);
    }

    var birdBalloon = setInterval(function () {
      i < max ? i++ : i = min;
      $('.bird').width(i);
    }, 1);

    var scrollDown = setInterval(function() {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);

  });

});