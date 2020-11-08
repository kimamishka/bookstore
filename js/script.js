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
  $(".newarriv").css("display", "block");
  $(".bestsel, .used, .special").css("display", "none");
  $(".two__bs, .two__na, .one__ub, .one__so").css("display", "inline-block");
  $(".one__bs, .one__na, .two__ub, .two__so").css("display", "none");
});
$(".one__ub").click(function (event) {
  $(".used").css("display", "block");
  $(".bestsel, .newarriv, .special").css("display", "none");
  $(".two__bs, .one__na, .two__ub, .one__so").css("display", "inline-block");
  $(".one__bs, .two__na, .one__ub, .two__so").css("display", "none");
});
$(".one__so").click(function (event) {
  $(".special").css("display", "block");
  $(".bestsel, .used, .newarriv").css("display", "none");
  $(".two__bs, .one__na, .one__ub, .two__so").css("display", "inline-block");
  $(".one__bs, .two__na, .two__ub, .one__so").css("display", "none");
});
$(".two__bs").click(function (event) {
  $(".bestsel").css("display", "block");
  $(".newarriv, .used, .special").css("display", "none");
  $(".one__bs, .one__na, .one__ub, .one__so").css("display", "inline-block");
  $(".two__bs, .two__na, .two__ub, .two__so").css("display", "none");
});

//namberpage
$("#p1").click(function (event) {
  $("#p1").css("border-right", "1px solid #d8dce0");
  $("#p1").css("border-bottom", "4px solid #81bd66");
  $("#p1").css("opacity", "0.8");
  $("#p2,#p3,#p4,#p5,#p6").css("border", "none");
  $("#p2,#p3,#p4,#p5,#p6").css("opacity", "1");

  $("#bestsel_1").css("display", "block");
  $("#bestsel_2, #bestsel_3, #bestsel_4, #bestsel_5, #bestsel_6").css("display", "none");
});
$("#p2").click(function (event) {
  $("#p2").css("border-right", "1px solid #d8dce0");
  $("#p2").css("border-bottom", "4px solid #81bd66");
  $("#p2").css("opacity", "0.8");
  $("#p1,#p3,#p4,#p5,#p6").css("border", "none");
  $("#p1,#p3,#p4,#p5,#p6").css("opacity", "1");

  $("#bestsel_2").css("display", "block");
  $("#bestsel_1, #bestsel_3, #bestsel_4, #bestsel_5, #bestsel_6").css("display", "none");
});
$("#p3").click(function (event) {
  $("#p3").css("border-right", "1px solid #d8dce0");
  $("#p3").css("border-bottom", "4px solid #81bd66");
  $("#p3").css("opacity", "0.8");
  $("#p1,#p2,#p4,#p5,#p6").css("border", "none");
  $("#p1,#p2,#p4,#p5,#p6").css("opacity", "1");

  $("#bestsel_3").css("display", "block");
  $("#bestsel_2, #bestsel_1, #bestsel_4, #bestsel_5, #bestsel_6").css("display", "none");
});
$("#p4").click(function (event) {
  $("#p4").css("border-right", "1px solid #d8dce0");
  $("#p4").css("border-bottom", "4px solid #81bd66");
  $("#p4").css("opacity", "0.8");
  $("#p1,#p3,#p2,#p5,#p6").css("border", "none");
  $("#p1,#p3,#p2,#p5,#p6").css("opacity", "1");

  $("#bestsel_4").css("display", "block");
  $("#bestsel_2, #bestsel_3, #bestsel_1, #bestsel_5, #bestsel_6").css("display", "none");
});
$("#p5").click(function (event) {
  $("#p5").css("border-right", "1px solid #d8dce0");
  $("#p5").css("border-bottom", "4px solid #81bd66");
  $("#p5").css("opacity", "0.8");
  $("#p1,#p3,#p4,#p2,#p6").css("border", "none");
  $("#p1,#p3,#p4,#p2,#p6").css("opacity", "1");

  $("#bestsel_5").css("display", "block");
  $("#bestsel_2, #bestsel_3, #bestsel_4, #bestsel_1, #bestsel_6").css("display", "none");
});
$("#p6").click(function (event) {
  $("#p6").css("border-right", "1px solid #d8dce0");
  $("#p6").css("border-bottom", "4px solid #81bd66");
  $("#p6").css("opacity", "0.8");
  $("#p1,#p3,#p4,#p5,#p2").css("border", "none");
  $("#p1,#p3,#p4,#p5,#p2").css("opacity", "1");

  $("#bestsel_6").css("display", "block");
  $("#bestsel_2, #bestsel_3, #bestsel_4, #bestsel_5, #bestsel_1").css("display", "none");
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