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
        }).slickAnimation();