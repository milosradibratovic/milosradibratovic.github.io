$(document).ready(function() {
  //variables needed for card animation
  var $cards, $panels;
  // variables needed for button animation
  var $parent, ink, x, y, diameter;

  // smooth scroll plugin
  $('nav>ul').localScroll();

  // animation for collapsed navbar
  $('.nav-toggle-button').click(function() {
    $('nav').toggleClass('nav-show');
    $(this).toggleClass('nav-toggle-button-transform');
  });

  // on click animation for buttons
  $('.btn').click(function(event){
    if($(this).find('.ink').length === 0) {
      $(this).prepend("<span class='ink'></span>");
    }
    // if user clics on button before animation is finished we stop current animation
    ink = $(this).find('.ink');
    ink.removeClass('ink-animate');

    if(!ink.height() && !ink.width()) {
      diameter = Math.max($(this).outerWidth(), $(this).outerHeight());
      ink.css({height: diameter+'px', width: diameter+'px'});
    }

    x = event.pageX - $(this).offset().left - ink.width()/2;
    y = event.pageY - $(this).offset().top - ink.height()/2;

    ink.css({top: y+'px', left: x+'px'}).addClass('ink-animate')
  });
});
