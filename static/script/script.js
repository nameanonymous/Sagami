$(document).ready(function () {
        var $photos = $('#photos'),
            $lis = $('#photos li');

        var li_count = $lis.length;
        var li_width = $lis.outerWidth(true);  // リスト項目の幅 + マージンを考慮

        // 画像リストの全体幅を設定
        $photos.css('width', (li_width * li_count) + 'px');

        // 永続的にスライドさせる
        setInterval(function () {
            // アニメーションで左にスライドさせる
            $photos.animate({
                marginLeft: -li_width  // リスト全体を左にスライド
            }, 3500, 'linear', function () {
                // スライド終了後、リストの最初の項目を最後に移動
                $photos.css('margin-left', '0').find('li:first').appendTo($photos);
            });
        }, 3500);  // アニメーションの間隔（スライドとスライドの間）
    });


    $('.slider').slick({
      autoplay: true,
      speed: 800,
      lazyLoad: 'progressive',
      adaptiveHeight: true,
      arrows: false,
      dots: true,
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      // 全てのスライド内の文字を非表示にする
      $('.slide-text').css({
        opacity: 0,
        animation: 'none', // アニメーションをリセット
      });
    }).on('afterChange', function (event, slick, currentSlide) {
      // 現在のスライドにアニメーションを適用
      const $currentText = $('.slick-current .slide-text');
      $currentText.css({
        opacity: 0, // 再度非表示にセット
        animation: 'none', // アニメーションリセット
      });
      void $currentText[0].offsetWidth; // DOMをリフレッシュ
      $currentText.css({
        animation: 'fadeIn 1.5s ease-out forwards', // 新しいアニメーションを適用
      });
    });
