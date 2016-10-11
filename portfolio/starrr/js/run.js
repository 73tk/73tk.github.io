$(function() {
    'use strict';

    var cj = createjs;

    $(window).on('load resize', function() {
        var $wrapper = $('#wrapper');
        var $cvs = $('canvas');
        //canvas拡張（Retina2倍まで）
        $cvs.attr({
            height: $wrapper.height() * 2,
            width: $wrapper.width() * 2
        });
        $cvs.css({
            'height': $wrapper.height(),
            'width': $wrapper.width()
        });
    });

    //canvasをstageに
    var stage = new cj.Stage($('canvas')[0]);

    // カラーセット
    var colorSet = ['#EF6E95', '#9BD3F4', '#B5DA69'];

    function shootingStar (){

        var starSize = Math.floor(10 + Math.random() * $(window).width() * 2 / 50);
        var shootingSpeed = Math.floor(1000 + Math.random() * 5000);
        var stardust = new cj.Graphics();
        var randColor = Math.floor(Math.random() * colorSet.length);
        var rotateDeg = Math.floor(90 + Math.random() * 270);
        stardust.beginFill(colorSet[randColor]);
        stardust.drawPolyStar(0, 0, starSize, 5, 0.4, 0);

        //シェイプオブジェクトに渡す
        var star = new cj.Shape(stardust);

        star.x = Math.floor(Math.random() * $(window).width()*2);
        star.y = $(window).height()*2;

        //ステージにシェイプをセット
        stage.addChild(star);

        cj.Tween.get(star).to({
            y:-starSize,
            alpha:0.1,
            rotation:rotateDeg
        },shootingSpeed).call(function(){
            stage.removeChild(star);
        });
        stage.update();
    }

    function init(){
        cj.Ticker.addEventListener('tick', shootingStar);
        cj.Ticker.setFPS(50);
    }

    init();
});