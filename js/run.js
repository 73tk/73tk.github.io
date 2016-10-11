(function(){
  'use strict';

  /* depend on minigrid@3.0.5 */

  var grid = new Minigrid({
    container: '.cards',
    item: '.card',
    gutter: 25
  });
  window.addEventListener('load', function () {
    grid.mount();
  });
  window.addEventListener('resize', function () {
    grid.mount();
  });
})();

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
