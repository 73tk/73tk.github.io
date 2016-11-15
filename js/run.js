$(function () {
  'use strict';

  /* smooth scroll */

  $(document).on('click', 'a[href^="#"]', function () {
    var href= $(this).attr('href');
    var target = $(href === '#' || href === '' ? 'html' : href);
    var position = target.offset().top;
    $('body, html').animate({
      scrollTop : position
    }, 500, 'swing');

    return false;
  });
});
