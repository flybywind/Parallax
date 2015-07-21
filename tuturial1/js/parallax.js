/*jslint browser: true*/
/*global $, jQuery*/

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $(".back-bird").css("transform", "translateY(" + wScroll / 3 + "px)");
  $(".logo").css("transform", "translateY(" + wScroll / 2.2 + "px)");
  $(".fore-bird").css("transform", "translateY(-" + wScroll / 2.2 + "px)");
})
