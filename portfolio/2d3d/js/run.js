$(function() {

    var s = Snap('#svg');
    var obj = s.selectAll('polygon');

    var $obj = $('polygon');
    $('polygon:odd').addClass('right');
    $obj.css('opacity', 1);
    $obj.each(function(i) {
        $(this).delay(50 * i).animate({
            opacity: 0}, 1500, function() {
                $(this).attr({'class': 'on'});
        });
    });
    s.select('#bg').attr({
        opacity: 0
    }).animate({
        opacity: 1
    }, 328*50);

});