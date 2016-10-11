$(function() {
  'use strict';
  $('.switch').on('click', function () {
    $('.room').toggleClass('on');
    $(this).find('i').first().appendTo(this);
    return false;
  });
});