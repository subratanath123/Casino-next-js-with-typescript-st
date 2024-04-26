$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* niceSelect */
    $("select").niceSelect();

    // counter Up
    if (document.querySelector('.counter') !== null) {
      $('.counter').counterUp({
        delay: 10,
        disableOn: 0,
        time: 2000
      });
    }

    /* Countdown js */
    if (document.querySelector('.countdown') !== null) {
      $('.countdown').downCount({
        date: '12/31/2024 11:59:59',
        offset: +10
      });
    }

    // jackpot-carousel
    $(".jackpot-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 574,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    // games-carousel
    $(".games-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-e-double-right-arrow\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    // blog-carousel
    $(".blog-carousel").not('.slick-initialized').slick({
      infinite: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-arrow\"  aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-arrow\"  aria-hidden='true'></i></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      }
    });

    /* Magnific Popup */
    if (document.querySelector('.popupvideo') !== null) {
      $('.popupvideo').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    /* Wow js */
    new WOW().init();

  });
});