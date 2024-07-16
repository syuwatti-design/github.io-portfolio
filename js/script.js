$(function () {
    $('.floating-link').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 700);
    });
    $('.floating-link').hover(
        function() {
            $(this).find('.floating-text').stop().fadeIn(300);
        },
        function() {
            $(this).find('.floating-text').stop().fadeOut(300);
        }
    );

    $('.about-link').on('click', function() {
        $('#about').removeClass('hidden').addClass('flex-column-center');
        $('#skill').addClass('hidden').removeClass('flex-column-center');
        $('#contact').addClass('hidden').removeClass('flex-column-center');
        $('#home').addClass('hidden').removeClass('contents');
        $('#header-nav').removeClass('hidden');
    });

    $('.skill-link').on('click', function() {
        $('#skill').removeClass('hidden').addClass('flex-column-center');
        $('#about').addClass('hidden').removeClass('flex-column-center');
        $('#contact').addClass('hidden').removeClass('flex-column-center');
        $('#home').addClass('hidden').removeClass('contents');
        $('#header-nav').removeClass('hidden');
    });

    $('.contact-link').on('click', function() {
        $('#contact').removeClass('hidden').addClass('flex-column-center');
        $('#about').addClass('hidden').removeClass('flex-column-center');
        $('#skill').addClass('hidden').removeClass('flex-column-center');
        $('#home').addClass('hidden').removeClass('contents');
        $('#header-nav').removeClass('hidden');
    });



    var $slider = $('#js-slider-2');

    $slider.slick({
        arrows: true, // 前・次のボタンを表示する
        dots: true, // ドットナビゲーションを表示する
        appendDots: $('.dots-2'), // ドットナビゲーションの生成位置を変更
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化
    });

    function adjustSlickTrackWidth() {
        var bodyWidth = $('body').width();
        $('.slick-track').css('width', bodyWidth + 'px');
    }

    $(window).on('resize', function () {
        adjustSlickTrackWidth();
        $slider.slick('setPosition'); // Slickの位置を再設定
    });

    adjustSlickTrackWidth(); // 初期読み込み時に幅を調整

      
});
