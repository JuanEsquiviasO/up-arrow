$(document).ready(function(){
  $('.up-down').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 400);
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.up-down').slideDown(400);
    } else {
        $('.up-down').slideUp(400);
    }
  });

});
