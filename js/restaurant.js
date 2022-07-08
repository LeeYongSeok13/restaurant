$(function () {
    $('.main_visual01_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.main_visual02 .main_visual02_slider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

    $('.main_visual02 .main_visual02_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.main_visual03 .slider_nav').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '80px',
        asNavFor: '.slider_main',
    });

    $('.main_visual03 .slider_main').slick({
        arrows: false,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.slider_nav'
    });

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index();
        $('.tab_content>div').removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on');
    });

    $('.tab_content li').on('click', function (event) {
        $('.right li').removeClass('on');
    })

    $('.tab_content .notice li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.right_notice>li').removeClass('on');
        $('.right_notice>li').eq(idx).addClass('on');
    });

    $('.tab_content .event li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.right_event>li').removeClass('on');
        $('.right_event>li').eq(idx).addClass('on');
    });

    $('.tab_content .QandA li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.right_QandA>li').removeClass('on');
        $('.right_QandA>li').eq(idx).addClass('on');
    });
})
