
$('.selectBox').click(function() {
    const currentHeight =  $(this).find('.selectMenuBox').height();
    const valueHeight =  $(this).find('.valueTag').height();
    if ($(this).height() === 36) {
        $(this).height(`${currentHeight + valueHeight}px`);
        $(this).find('.arrow').css({transform: "rotate(90deg)"});
    } else {
        $(this).height(36);
        $(this).find('.arrow').css({transform: "rotate(0deg)"});
    }
});

let workSlider = $("#workSlider");

workSlider.slick({
    infinite: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 1144,
          settings: {
                slidesToShow: 2
          }
        },
        {
            breakpoint: 780,
            settings: {
                  slidesToShow: 1
            }
          }
    ]
});

let rewiewSlider = $("#rewiewSlider");

rewiewSlider.slick({
    infinite: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 1144,
          settings: {
                slidesToShow: 2
          }
        },
        {
            breakpoint: 780,
            settings: {
                  slidesToShow: 1
            }
          }
    ]
});

$(".phone").mask("+9 (999) 999-9999");

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let scrollEl = $(this).data("scroll");
    let scrollElPos = $(scrollEl).offset().top;

    $("html, body").animate({
        scrollTop: scrollElPos
    }, 500);
});
