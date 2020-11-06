//БУРГЕР
$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger, .header-menu").toggleClass("active");
    $(".header-menu").css("top", "0");
  });
});
$(".main__item").click(function (event) {
  $(".header-menu").css("top", "-100%");
});


//tabs product
$(".li__2").click(function (event) {
  $("#tabs-2").css("display", "block");
  $("#tabs-1").css("display", "none");
  $(".li__1, .li__2").css("display", "none");
  $(".li__11, .li__22").css("display", "inline-block");
});
$(".li__11").click(function (event) {
  $("#tabs-1").css("display", "block");
  $("#tabs-2").css("display", "none");
  $(".li__1, .li__2").css("display", "inline-block");
  $(".li__11, .li__22").css("display", "none");
});

//tabs index
$(".one__na").click(function (event) {
  $("#newarriv").css("display", "block");
  $("#bestsel, #used, #special").css("display", "none");
  $(".two__bs, .two__na, .one__ub, .one__so").css("display", "inline-block");
  $(".one__bs, .one__na, .two__ub, .two__so").css("display", "none");
});
$(".one__ub").click(function (event) {
  $("#used").css("display", "block");
  $("#bestsel, #newarriv, #special").css("display", "none");
  $(".two__bs, .one__na, .two__ub, .one__so").css("display", "inline-block");
  $(".one__bs, .two__na, .one__ub, .two__so").css("display", "none");
});
$(".one__so").click(function (event) {
  $("#special").css("display", "block");
  $("#bestsel, #used, #newarriv").css("display", "none");
  $(".two__bs, .one__na, .one__ub, .two__so").css("display", "inline-block");
  $(".one__bs, .two__na, .two__ub, .one__so").css("display", "none");
});
$(".two__bs").click(function (event) {
  $("#bestsel").css("display", "block");
  $("#newarriv, #used, #special").css("display", "none");
  $(".one__bs, .one__na, .one__ub, .one__so").css("display", "inline-block");
  $(".two__bs, .two__na, .two__ub, .two__so").css("display", "none");
});

//mainslider
$(document).ready(function () {
  $('.mainslider').slick({
    prevArrow: "<img src='img/slider_block/l_arr.png' class='prev__s' alt='1'>",
    nextArrow: "<img src='img/slider_block/r_arr.png' class='next__s' alt='2'>",
    arrows: true,
    dots: false,
    slidesToShow: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1400,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});