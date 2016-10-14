$(function() {
'use strict';

	/*---------------------------------------------------------
	垂直方向中央にアニメーションで配置
	---------------------------------------------------------*/

	$(window).on('load resize', function(){
		adjustMarginTB();
	});
	// コンテンツ全体をウィンドウの高さに対して中央に配置
	function adjustMarginTB (){
		var $contentBox = $('#wrap');
		var windowH = $(window).height();
		var contentBoxH = $contentBox.height();
		var marginTB = (windowH - contentBoxH) / 2;
		$contentBox.animate({
			marginTop: marginTB,
			marginBottom: marginTB
		}).fadeIn(500);
	}

	/*---------------------------------------------------------
	ナビゲーションのクリックイベント
	---------------------------------------------------------*/

		// 棒グラフ読み込み
		$('#trigger1').on('click', function() {
			$('.g-nav li').removeClass('active');
			$(this).parent().addClass('active');
			$('section, .controler, .graph').animate({
				'marginTop': '-=20px',
				'opacity': '0'
			}, 500, function() {
					$(this).css({
						'margin-top': '0',
						'opacity': '1',
						'display': 'none'
					});
			});
			setTimeout(function(){
				$('#graph1, #graph1 .controler').fadeIn(1000, function() {
					$('#graph1 .graph').fadeIn(1000, function() {
						// 縦marginを調整
						adjustMarginTB();
					    setTimeout(function(){
					    	// ラジオボタンをチェック
				        	checkBarBtn();
					    },500);
					});
				});
			},1000);
			return false;
		});

		// 折れ線グラフ読み込み
		$('#trigger2').on('click', function() {
			$('.g-nav li').removeClass('active');
			$(this).parent().addClass('active');
			$('section, .controler, .graph').animate({
				'marginTop': '-=20px',
				'opacity': '0'
			}, 500, function() {
					$(this).css({
						'margin-top': '0',
						'opacity': '1',
						'display': 'none'
					});
			});
			setTimeout(function(){
				$('#graph2, #graph2 .controler').fadeIn(1000, function() {
					$('#graph2 .graph').fadeIn(1000, function() {
						// 縦marginを調整
						adjustMarginTB();
					    setTimeout(function(){
					    	// ラジオボタンをチェック
				        	checkLineBtn();
					    },500);
					});
				});
			},1000);
			return false;
		});

		// 円グラフ読み込み
		$('#trigger3').on('click', function() {
			$('.g-nav li').removeClass('active');
			$(this).parent().addClass('active');
			$('section, .controler, .graph').animate({
				'marginTop': '-=20px',
				'opacity': '0'
			}, 500, function() {
					$(this).css({
						'margin-top': '0',
						'opacity': '1',
						'display': 'none'
					});
			});
			setTimeout(function(){
				$('#graph3, #graph3 .controler').fadeIn(1000, function() {
					$('#graph3 .graph').fadeIn(1000, function() {
						// 縦marginを調整
						adjustMarginTB();
					    setTimeout(function(){
					    	// ラジオボタンをチェック
				        	checkPieBtn();
					    },500);
					});
				});
			},1000);
			return false;
		});

		// レーダーグラフ読み込み
		$('#trigger4').on('click', function() {
			$('.g-nav li').removeClass('active');
			$(this).parent().addClass('active');
			$('section, .controler, .graph').animate({
				'marginTop': '-=20px',
				'opacity': '0'
			}, 500, function() {
					$(this).css({
						'margin-top': '0',
						'opacity': '1',
						'display': 'none'
					});
			});
			setTimeout(function(){
				$('#graph4, #graph4 .controler').fadeIn(1000, function() {
					$('#graph4 .graph').fadeIn(1000, function() {
						// 縦marginを調整
						adjustMarginTB();
					    setTimeout(function(){
					    	// ラジオボタンをチェック
				        	checkRadarBtn();
					    },500);
					});
				});
			},1000);
			return false;
		});

	/*---------------------------------------------------------
	タイトルの×ボタン
	---------------------------------------------------------*/
	// ボタンを生成
	var closeBtn = $('<span>×</span>');
	$('h2').append(closeBtn);
	// ボタンクリックで閉じる
	$('section').on('click', 'h2 > span', function() {
		$('.g-nav li').removeClass('active');
		$('section, .controler, .graph').animate({
			'marginTop': '-=20px',
			'opacity': '0'
		}, 500, function() {
				$(this).css({
					'margin-top': '0',
					'opacity': '1',
					'display': 'none'
				});
		});
		setTimeout(function(){
			$('#first-view').fadeIn(1000);
			adjustMarginTB();
		},1000);
		return false;
	});


	/*---------------------------------------------------------
	bar chart
	---------------------------------------------------------*/

	// 棒グラフ・折れ線グラフ共用データ

	var data1 = [];
	for (var i = 0; i < 20; i++) {
		data1.push(10 + Math.floor( Math.random() * 90 ));
	}
	var data2 = [];
	for (var j = 0; j < 20; j++) {
		data2.push(10 + Math.floor( Math.random() * 90 ));
	}
	var data3 = [];
	for (var k = 0; k < 20; k++) {
		data3.push(10 + Math.floor( Math.random() * 90 ));
	}

	// ラベルデータ
	var barLabel = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];

	var svgW = 740;
	var svgH = 450;

	var barHeight = 400;    // 棒グラフの基準位置
	var barScale = 4;   // 3倍サイズで描画
	var xBarSize = 33;  // 棒グラフの横幅
	var xOffset = 50;
	var yOffset = 20;

	var svg = d3.select('#barChart').append('svg')
		.attr({
			width: svgW,
			height: svgH
		});

	var bar = svg.selectAll('rect')
			.data(data1)
			.enter()
			.append('rect')
			.attr('x', function(d, i) {
				return i * xBarSize + xOffset +10;
			})
			.attr('y', function(d) {
				return barHeight + yOffset + "px";
			})
			// 棒グラフの横幅を指定
			.attr('width', xBarSize - 10)
			// 縦幅を配列の内容に応じて計算
			.attr('height', function(d) {
				return '0px';
			})
			.style('fill', '#33BFDB')
			.on( "mouseover", function(d, i){
				d3.select(this)
					.transition()
					.duration(200)
					.style('fill', '#82ACE4');
		    })
		    .on( "mouseout", function(d, i){
				d3.select(this)
					.transition()
					.duration(200)
					.style('fill', '#33BFDB');
		    });

	// ラベルテキスト
	svg.selectAll('text')
		.data(barLabel)
		.enter()
		.append('text')
		.text(function(d) {
			return d;
		})
		.attr('x', function(d, i) {
				return i * xBarSize + xOffset +22;
			})
		.attr('y', barHeight + yOffset +20)
		.attr("text-anchor", "middle")
		.attr('stroke', 'white');

	// 目盛り挿入
	var yScale = d3.scale.linear()
		.domain([0, 100])
		.range([100*barScale, 0]);

	svg.append('g')
		.attr('class', 'axis')
		.attr('transform', 'translate('+xOffset+', '+yOffset+')')
		.call(d3.svg.axis()
		.scale(yScale)
		.orient('left')
	);

	$('#graph1 input').change(function() {
		checkBarBtn();
	});

	function checkBarBtn (){
		if ($('#bar1').prop('checked')) {
			bar.data(data1)
				.transition()
				.ease('elastic')
				.duration(1000)
				.attr('y', function(d) {
					return barHeight-(d*barScale) + yOffset + 'px';
				})
				.attr('height', function(d) {
					return (d*barScale) +'px';
				});
		} else if ($('#bar2').prop('checked')){
			bar.data(data2)
				.transition()
				.ease('elastic')
				.duration(1000)
				.attr('y', function(d) {
					return barHeight-(d*barScale) + yOffset + 'px';
				})
				.attr('height', function(d) {
					return (d*barScale) +'px';
				});
		} else if ($('#bar3').prop('checked')){
			bar.data(data3)
				.transition()
				.ease('elastic')
				.duration(1000)
				.attr('y', function(d) {
					return barHeight-(d*barScale) + yOffset + 'px';
				})
				.attr('height', function(d) {
					return (d*barScale) +'px';
				});
		}
	}

	/*---------------------------------------------------------
	line chart
	---------------------------------------------------------*/

	var svgL = d3.select('#lineChart').append('svg')
		.attr({
			width: svgW,
			height: svgH
		});

	var line = d3.svg.line()
		.x(function(d, i){ return i * xBarSize + xOffset +10; })
		.y(svgH - yOffset);

	svgL.append('path')
		.attr('class', 'lineGraph')
		.attr('d', line(data1))
		.attr('stroke', '#33BFDB')
		.attr('stroke-width', 2)
		.attr('stroke-dasharray', '5, 2')
		.attr('fill', 'none');

	svgL.append('g')
		.attr('class', 'axis')
		.attr('transform', 'translate('+xOffset+', '+yOffset+')')
		.call(d3.svg.axis()
		.scale(yScale)
		.orient('left')
	);

	svgL.selectAll('textL')
		.data(barLabel)
		.enter()
		.append('text')
		.attr("class", "textL")
		.text(function(d) {
			return d;
		})
		.attr('x', function(d, i) {
				return i * xBarSize + xOffset + 10;
		})
		.attr('y', barHeight + yOffset +20)
		.attr("text-anchor", "middle")
		.attr('stroke', 'white');


	$('#graph2 input').change(function() {
		checkLineBtn();
	});

	function checkLineBtn (){
		if ($('#line1').prop('checked')) {
			drawLine(data1);
		}
		if ($('#line2').prop('checked')){
			drawLine(data2);
		}
		if ($('#line3').prop('checked')){
			drawLine(data3);
		}
	}

	function drawLine(data) {
		var line = d3.svg.line()
			.x(function(d, i){ return i * xBarSize + xOffset +10; })
			.y(function(d){ return svgH - d * barScale; });

		svgL.selectAll('.lineGraph')
		    .transition()
		    .ease('cubic')
		    .duration(1000)
			.attr('d', line(data));
	}


	/*---------------------------------------------------------
	pie chart
	---------------------------------------------------------*/

	// 円グラフ用データ
	var dataP1 = [50, 25, 12, 8, 5];
	var dataP2 = [35, 30, 20, 10, 5];
	var dataP3 = [30, 20, 20, 15, 15];

	var color = ["rgba(51,191,219,1)", "rgba(51,191,219,0.8)", "rgba(51,191,219,0.6)", "rgba(51,191,219,0.4)", "rgba(51,191,219,0.2)"];

	var svgP = d3.select('#pieChart').append('svg')
		.attr({
			width: svgW,
			height: svgH
		});

	var pie = d3.layout.pie()
		.value(function(d) { return d; });

	var arc = d3.svg.arc().innerRadius(20).outerRadius(200);

	var g = svgP.append('g');

	g.selectAll('path')
		.data(pie(dataP1))
		.enter()
		.append('path')
		.attr('stroke', '#222')
		.attr('fill', function(d, i) {
			return color[i];
		})
		.attr('transform', 'translate(' + svgW/2 + ',' + svgH/2 + ')');

		$('#graph3 input').change(function() {
			checkPieBtn();
		});

	function checkPieBtn (){
		if ($('#pie1').prop('checked')) {
			drawPie(dataP1);
		}
		if ($('#pie2').prop('checked')){
			drawPie(dataP2);
		}
		if ($('#pie3').prop('checked')){
			drawPie(dataP3);
		}
	}

	function drawPie(data) {
		var pie = d3.layout.pie()
			.value(function(d) { return d; });

		g.selectAll('path')
			.data(pie(data))
			.transition()
			.duration(1000)
			.attrTween('d', function(d) {
				var interpolate = d3.interpolate(
					{startAngle : 0, endAngle : 0},
					{startAngle : d.startAngle, endAngle : d.endAngle}
				);
				return function(t) {
					return arc(interpolate(t));
				};
			});
	}

	/*---------------------------------------------------------
	radar chart
	---------------------------------------------------------*/

	var svgR = d3.select('#radarChart').append('svg')
		.attr({
			width: svgW,
			height: svgH
		});

	// グリッド用
    var grid = [
        [1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]
    ];
    // 初期読み込みデータ
    var paramNum0 = [
		[0,0,0,0,0]
    ];
    // レーダー用データ
    var paramNum1 = [
		[3,2,4,5,3]
    ];
    var paramNum2 = [
		[2,4,5,3,1]
    ];
    var paramNum3 = [
		[1,3,2,1,5]
    ];
    var scaleR = d3.scale.linear()
        .domain([0,5]).range([0,200]);

    var polygon = d3.svg.line()
        .x(function(d,i){return scaleR(d) * Math.sin(Math.PI*2/5 * i) + 360;})
        .y(function(d,i){return -scaleR(d) * Math.cos(Math.PI*2/5 * i) + 250;})
        .interpolate("linear");

    svgR.selectAll("path.grid")
        .data(grid)
        .enter()
        .append("path")
        .attr("d", function(d,i){return polygon(d)+"z";})
        .attr("stroke", "white")
        .attr("stroke-dasharray", "2")
        .attr("fill", "none");


    svgR.selectAll("path.radar")
        .data(paramNum0)
        .enter()
        .append("path")
        .attr('class', 'radar')
        .attr("d", function(d,i){return polygon(d)+"z";})
        .attr("stroke", "#33BFDB")
        .attr("stroke-width", 2)
    	.attr("fill", "rgba(51,191,219,0.3)");

	$('#graph4 input').change(function() {
		checkRadarBtn();
	});

	function checkRadarBtn (){
		if ($('#radar1').prop('checked')) {
			drawRader(paramNum1);
		}
		if ($('#radar2').prop('checked')) {
			drawRader(paramNum2);
		}
		if ($('#radar3').prop('checked')) {
			drawRader(paramNum3);
		}
	}

	function drawRader(data) {
	    var polygon = d3.svg.line()
	        .x(function(d,i){return scaleR(d) * Math.sin(Math.PI*2/5 * i) + 360;})
	        .y(function(d,i){return -scaleR(d) * Math.cos(Math.PI*2/5 * i) + 250;})
	        .interpolate("linear");

	    svgR.selectAll("path.radar")
	    	.data(data)
		    .transition()
		    .duration(500)
	        .attr("d", function(d,i){return polygon(d)+"z";});
	}

});