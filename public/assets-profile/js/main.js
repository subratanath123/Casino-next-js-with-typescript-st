$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // Scroll Top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // Navbar Dropdown
    var dropdown_menu = $(".header-section .dropdown-menu");
    $(window).resize(function () {
      if ($(window).width() < 992) {
        dropdown_menu.removeClass('show');
      }
      else {
        dropdown_menu.addClass('show');
      }
    });
    if ($(window).width() < 992) {
      dropdown_menu.removeClass('show');
    }
    else {
      dropdown_menu.addClass('show');
    }

    // Sticky Header
    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // Active Wallet
    $('.checkbox-single input').on("change", function(){
      if($(this).is(":checked")) {
          $(this).closest('.single-box').addClass('active');
      } else {
          $(this).closest('.single-box').removeClass('active');
      }
    });

    // Number Active 
    var numbers = $(".quick-value li h5");
    var enterNumber = $("#amount");
    $(numbers).click(function () {
      $(numbers).removeClass('active');
      $(this).addClass('active');
        var numbersVal = $(this).html();
        $(enterNumber).val(numbersVal);
    });

    $('.header-section .sidebar-icon').on('click', function () {
      $('.sidebar-wrapper').toggleClass('active');
      $(".header-section").toggleClass("body-collapse");
      $(".dashboard-section").toggleClass("body-collapse");
    });

    // User Active
    $('.header-section .sidebar-icon').on('click', function () {
      $('.sidebar-wrapper').toggleClass('active');
      $(".header-section").toggleClass("body-collapse");
      $(".dashboard-section").toggleClass("body-collapse");
    });

    // Sidebar Wrapper Close
    $(".header-section .close-btn").click(function () {
      $(".sidebar-wrapper").toggleClass("active");
      $(".header-section").toggleClass("body-collapse");
      $(".dashboard-section").toggleClass("body-collapse");
    });

    // sidebar body active
    var sidebar_wrapper = $(".sidebar-wrapper");
    var body_collapse = $(".header-section");
    $(window).resize(function () {
      if ($(window).width() > 1399) {
        sidebar_wrapper.removeClass('active');
        body_collapse.addClass('body-collapse');
      }
      else {
        sidebar_wrapper.addClass('active');
        body_collapse.removeClass('body-collapse');
      }
    });
    if ($(window).width() > 1399) {
      sidebar_wrapper.removeClass('active');
      body_collapse.addClass('body-collapse');
    }
    else {
      sidebar_wrapper.addClass('active');
      body_collapse.removeClass('body-collapse');
    }

    // Header Active
    $('.single-item.massage-area').on('click', function () {
      $('.massage-content').toggleClass('active');
      $('.notifications-content').removeClass('active');
      $('.setting-content').removeClass('active');
      $('.user-content').removeClass('active');
    });
    $('.single-item.notifications-area').on('click', function () {
      $('.massage-content').removeClass('active');
      $('.notifications-content').toggleClass('active');
      $('.setting-content').removeClass('active');
      $('.user-content').removeClass('active');
    });
    $('.single-item.setting-area').on('click', function () {
      $('.massage-content').removeClass('active');
      $('.notifications-content').removeClass('active');
      $('.setting-content').toggleClass('active');
      $('.user-content').removeClass('active');
    });
    $('.single-item.user-area').on('click', function () {
      $('.massage-content').removeClass('active');
      $('.notifications-content').removeClass('active');
      $('.setting-content').removeClass('active');
      $('.user-content').toggleClass('active');
    });

    // Dropdown Active Remove
    $("section").click(function () {
      $('.user-content').removeClass('active');
      $('.notifications-content').removeClass('active');
      $('.language-content').removeClass('active');
    });

  });
});