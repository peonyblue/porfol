$(function () {
    $('.topBanner i').on('click', function (e) {
        e.preventDefault()
        $('.topBanner').slideUp();
    })
    $('.sumSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
    });
    $('.popArrows i:nth-child(1)').on('click', function () {
        $('.sumSlider').slick('slickPrev')
    });
    $('.popArrows i:nth-child(2)').on('click', function () {
        $('.sumSlider').slick('slickNext')
    });
    $('.tabMenu').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed:5000,
        cssEase: 'linear',
        slidesToShow: 5,
        pauseOnHover: false,
        pauseOnFocus: false,
    })
});