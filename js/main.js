$(document).ready(function(){
    $('.about__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 800,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
            breakpoint: 650,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
  });