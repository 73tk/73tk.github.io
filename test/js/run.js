$(function () {
  'use strict';

  var limit = 5;
  var timer = false;

  $('#input-search').on('keyup', function () {
    $('.tbl-01').remove();
    $('#res-message').remove();
    $('#loader').css('display', 'block');
    if (timer !== false) {clearTimeout(timer);};
    timer = setTimeout(function() {
      var val = $('#input-search').val();
      var key = encodeURIComponent(val);
      var url = 'https://itunes.apple.com/search?term=' + key + '&limit=' + limit + '&country=jp&lang=ja_jp';
      ajaxLoadInfo(val, key, url);
      timer = false;
    }, 500);
  });

  $('#btn-search').on('click', function () {
    $('.tbl-01').remove();
    $('#res-message').remove();
    $('#loader').css('display', 'block');
    var val = $('#input-search').val();
    var key = encodeURIComponent(val);
    var url = 'https://itunes.apple.com/search?term=' + key + '&limit=' + limit + '&country=jp&lang=ja_jp';
    ajaxLoadInfo(val, key, url);
  });

  function ajaxLoadInfo(val, key, url) {
    // ajax start
    $.ajax({
      url:url,
      type: 'GET',
      dataType: 'jsonp',
      cache: false,
      // ajax成功時
      success: function(res) {
        console.log('successes');
        console.log(res);
        // ローダーを削除
        $('#loader').hide();

        if (res.results.length === 0) {
          $('#result').append('<p id="res-message" class="tac">No Data searching abaut "' + val + '"</p>');
        } else {
          for (var i = 0; i < limit; i = (i + 1)|0) {
            var item = res.results[i];
            var artistName = '<tr><th>artistName</th><td>' + item.artistName + '</td></tr>';
            var alubumName = '<tr><th>alubumName</th><td>' + item.collectionCensoredName + '</td></tr>';
            var genre = '<tr><th>genre</th><td>' + item.primaryGenreName + '</td></tr>';
            var previewSong = '<tr><th>song</th><td><strong>' + item.trackCensoredName + '</strong></td></tr>';
            var releaseDate = '<tr><th>releaseDate</th><td>' + item.releaseDate.split('T')[0] + '</td></tr>';
            var previewData = '<tr><th>preview</th><td><audio preload="metadata" controls><source src="' + item.previewUrl + '" type="audio/aac"></audio></td></tr>';
            var artWork = '<tr><th>artWork</th><td><img src="' + item.artworkUrl100 + '" /></td></tr>';
            $('#result').append('<table class="tbl-01">' + artistName + alubumName + genre + artWork + releaseDate + previewSong + previewData + '</table>');
            var $tbl = $('#result').find('.tbl-01');
            setTimeout(function () {
              $tbl.addClass('effect');
            }, 100);
          }
        }

      }
    });
  }

});
