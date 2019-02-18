// $(document).ready(function () {
//     // menu toggle BEGIN
//      $(".menu").on("click", function () { 
//          $(this).toggleClass("active");
//          $(".overlay").toggleClass("menu-open");
//       });
//      $(".overlay ul li a").on("click", function () { 
//         $(".menu").removeClass("active");
//         $(".overlay").removeClass("menu-open");
//       });
//     // menu toggle END

//     // carousel
//     $("#carousel1").owlCarousel({
//         loop              : true,
//         autoplay          : false,
//         nav               : false,
//         autoplayTimeout   : 3000,
//         autoplayHoverPause: false,
//         smartSpeed        : 500,
//         center            : true,
//         items             : 1,
//         dots              : true,
//     });
//     // carousel
// });

$(document).ready(function () {
    var preloared = document.getElementById("preloader");
    setTimeout(function () {
        if (!preloared.classList.contains('done')) {
            preloared.classList.add('done');
        }
    }, 1000);


    // menu toggle BEGIN
    $(".menu").on("click", function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("menu-open");
    });
    $(".overlay ul li a").on("click", function () {
        $(".menu").removeClass("active");
        $(".overlay").removeClass("menu-open");
    });
    // menu toggle END

    // carousel
    $("#carousel1").owlCarousel({
        loop: true,
        autoplay: false,
        nav: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        smartSpeed: 500,
        center: true,
        items: 1,
        dots: true,
    });
    //     // carousel

});
