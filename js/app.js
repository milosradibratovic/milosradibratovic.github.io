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

  // setup for card class animation
  $cards = $('.card').attr('forward', true);
  $panels = $('.panel');

  $panels.css({'display': 'none', 'border': '0px solid #0097A7'});

  $('.card').on('click', '.icon', function(event) {
    $selectedCard = $(event.target).parents('.card');
    $selectedIcon = $selectedCard.children('.icon');
    $selectedPanel = $selectedCard.children('.panel');

    if($selectedCard.attr('forward') === 'true') {
      // icon animation
      $selectedIcon.animate({ borderWidth: '7px' }, 200);
      $selectedIcon.animate({ borderWidth: '5px' }, 200);

      // panel animation
      $selectedPanel.slideDown();
      $selectedPanel.animate({ borderWidth: '3px'}, 100);
      $selectedPanel.css('box-shadow', '1px 1px 5px #777');

      // animation direction switch
      $selectedCard.attr('forward', 'false');

    } else if($selectedCard.attr('forward') === 'false') {
      //icon reverse animation
      $selectedIcon.animate({borderWidth: '7px'}, 100). animate({borderWidth: '3px'}, 200);

      // panel reverse animation
      $selectedPanel.slideUp();
      $selectedPanel.animate({borderWidth: '0px'}, 100);
      $selectedPanel.css({'box-shadow': 'none'});

      // animation direction switch
      $selectedCard.attr('forward', 'true');
    }
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
