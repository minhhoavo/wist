//slider mainvisual
$(".home-mainvisual__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1100,
  infinite: true,
  autoplay: true,
  arrows: false,
  dots:true
});

//slider label mainvisual
$(".home-mainvisual__labelslider").slick({
speed: 1100,
infinite: true,
autoplay: true,
prevArrow: $(".home-mainvisual__prev"),
nextArrow: $(".home-mainvisual__next"),
});

//slider plan
$('.home-plan__slider').slick({
infinite: true,
slidesToShow: 2,
slidesToScroll: 2,
autoplay: true,
prevArrow: $(".home-plan__prev"),
nextArrow: $(".home-plan__next"),
responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".home-plan__prev"),
      nextArrow: $(".home-plan__next"),
    },
  },
],
});

//menu mobile
$(document).ready(function () {
"use strict";
$(".c-header__hamburger").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("is-fixed");
    $(this).toggleClass('active');
    $(".c-header").addClass("is-headfixedSP");
    $(".c-header__navmb").toggleClass("opened");
});
});

var parent = $(".c-header__linkmb").next();
if (parent) {
parent.parent().addClass("is-parent");
}
$(".c-header__linkmb").click(function () {
$(".c-header__submenumb").removeClass("is-click");
var item = $(this).next();
if (item.length > 0) {
  $(this).next().toggleClass("is-click");
  $(".c-header__navmb").animate({scrollTop: 0},0);
}
else {
  $(".c-header__navmb").toggleClass("opened");
  $(".c-header__hamburger").removeClass("active");
  $('body').toggleClass("is-fixed");
}
});
$(".c-header__")
$(".c-header__back").click(function () {
$(this).parent().removeClass("is-click");
})

//validate form
$(document).ready(function(){
$("#contactform").validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        email: true,
      },
      "phone": {
        required: true,
        fnType: true,
        maxlength: 13,
      },
      "detail": {
        required: true
      },
    },
    messages: {
      "name": {
        required: "この項目は必須です"
      },
      "email": {
        required: "この項目は必須です",
        email: "example@gmail.com"
      },
      "phone": {
        required: "この項目は必須です",
        fnType: "00-0000-0000",
        maxlength: "00-0000-0000"
      },
      "detail": {
        required: "この項目は必須です"
      },
    }
  });

  $.validator.addMethod('email', function (value) {
    return value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  }, 'Enter valid email');

  $.validator.addMethod('fnType', function (value) {
    return value.match(/^(?:\d{10}|\d{11}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/);
  }, 'Enter valid phone number');
  $('.contact-form__input').blur(function () {
    if ($(this).val().length === 0) {
      $(this).nextAll('.contact-form__error').addClass('is-error');
    }
    else {
      $(this).nextAll('.contact-form__error').removeClass('is-error');
    }
  });
  $(".contact-form__btn").click(function () {
    if($(".contact-form__content").valid()){
      alert("");
      window.location.reload();
    }
  });
});

//header fixed when scroll
$(window).scroll(function () {
if ($(window).scrollTop() > 20) {
  $(".c-header").addClass("is-headfixed");
  $(".c-header__cover").addClass("is-headfixed");
  $(".c-header__logoimg").addClass("is-headfixed");
}
else{
  $(".c-header").removeClass("is-headfixed");
  $(".c-header__cover").removeClass("is-headfixed");
  $(".c-header__logo").removeClass("is-headfixed");
}    
}).scroll();


//back to top
$(window).scroll(function () {
if ($(window).scrollTop() > 20) {
  $(".c-backtotop").addClass("is-scroll");
}else{
  $(".c-backtotop").removeClass("is-scroll");
}
}).scroll();
$(".c-backtotop").click(function () {
$("html, body").animate({ scrollTop: 0 });
return false;
})

//fix scroll section
$('.home-mainvisual__scroll').click(function () {
var tag=$(this).attr("href");
var top=tag.offsetTop;    
if($(window).width() <= 1023){
  $('html, body').animate({ scrollTop: $(tag).position().top - 45}, 100);
}
else{
  $('html, body').animate({ scrollTop: $(tag).position().top - 60}, 100);
}
return false;
});

//scroll with animate
var $animation_elements = $('.c-fade');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('is-animate');
    } else {
      $element.removeClass('is-animate');
    }
  });
  
}
$window.on('scroll', check_if_in_view);
