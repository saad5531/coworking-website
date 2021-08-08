// const toggelButton = document.getElementsByClassName('toggel-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggelButton.addEventListener('click',()=>{
//     navbarLinks.classList.toggel('active')
// })
$(".testimonials-slider").slick({
    infinite: true,
    // autoplay: true,
    dots: true,
    arrows: true,
    dots: false,
    fade: true,
    // autoplaySpeed: 4000,
    prevArrow: $('#qw'),
    nextArrow: $('#qa'),
});

// $(".media-images").slick({
//     infinite: true,
//     autoplay: true,
//     dots: false,
//     arrows: true,
//     slidesToShow: 6,
//     autoplaySpeed: 4000,
//     prevArrow: $('.mediaSliderPrev'),
//     nextArrow: $('.mediaSliderNext'),
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 6,
//                 slidesToScroll: 4,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: "unslick"
//         }

//     ]
// });

$('.media-images').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    prevArrow: $('.mediaSliderPrev'),
    nextArrow: $('.mediaSliderNext'),
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
