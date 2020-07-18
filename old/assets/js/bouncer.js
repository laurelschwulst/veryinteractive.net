xInitial = 7;
yInitial = 6;
var xSpeed = xInitial;
var ySpeed = yInitial;

//init functions
$(window).load(function(){
  setTimeout(moveBouncer, 30);
});

function moveBouncer(){
  if (xSpeed > 2 || xSpeed < -2){
    xSpeed = xSpeed / 1.005;
  }
  if (ySpeed > 2 || ySpeed < -2){
    ySpeed = ySpeed / 1.005;
  }
  //set initial values
  var height = $('#bouncer').height();
  var width = $('#bouncer').width();
  var x = $('#bouncer').css('left');
  var y = $('#bouncer').css('top');
  x = parseFloat(x.substr(0, x.length-2));
  y = parseFloat(y.substr(0, y.length-2));

  //set test values
  var testX = x + xSpeed;
  var testY = y + ySpeed;

  //see if the next move will push the div off the screen, if so 
  //then change direction
  if (testX > $(window).width() - width || testX < 0){
    if (xSpeed < 0){
      xSpeed = xInitial;
    }else if (xSpeed > 0){
      xSpeed = -xInitial;
    }
  }
  if (testY > $(window).height() - height || testY < 0){
    if (ySpeed < 0){
      ySpeed = yInitial;
    }else if (ySpeed > 0){
      ySpeed = -yInitial;
    }
  }

  //set new location
  $('#bouncer').css({
    'top':y + ySpeed + 'px',
    'left':x + xSpeed + 'px'
  });

  //timer
  setTimeout(moveBouncer, 30);
}