$(function() {
    'use strict';

    var s = Snap('#svg');
    var $svg = $('#svg');
    var svgW = $svg.width();
    var svgH = $svg.height();
    // var center = {
    //     middleX: svgW / 2,
    //     middleY: svgH / 2,
    // };

    $(window).on('resize', function() {
        svgW = $svg.width();
        svgH = $svg.height();
    });

    function generateBubble () {
        var randX = Math.floor(Math.random() * svgW);
        var randR = Math.floor(Math.random() * svgW / 32);
        var randF = Math.floor(1 + Math.random() * 2);
        var randSpeed = Math.floor(1000 + Math.random() * 2000);
        var f = s.filter(Snap.filter.blur(randF, randF + 1));
        var bbl = s.circle(randX, svgH, randR).attr({
            fill: '#fff',
            filter: f
        });
        bbl.animate({
            transform: 't0, -' + svgH,
            opacity: 0
        }, randSpeed, function() {
            this.remove();
        });
    }
    setInterval(generateBubble, 200);

});