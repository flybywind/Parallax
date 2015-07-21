/*jslint browser: true*/
/*global $, jQuery*/

var modelTop = $(".content")[0].offsetTop;
var modelHeight = $(".model-rows img").eq(0).height();

function modelShowHide(ele, show) {
  var isShown = false;
  return function(show) {
    if (!isShown && show) {
      ele.each(function(idx, imgitem) {
        $(imgitem).addClass("showing").css({
          "transition": " all 0.5s ease " + idx * 0.2 + "s"
        });
      });
      isShown = true;
      console.log("show models");
    }
    if (isShown && !show) {
      ele.each(function(idx, imgitem) {
        $(imgitem).removeClass("showing").css({
          "transition": " all 0.3s ease " + (1 - idx * 0.1) + "s"
        });
      });
      isShown = false;
      console.log("hide models");
    }
  }
}
var model_show_hide = modelShowHide($(".models figure"));
var lastScroll = 0;
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  $(".back-bird").css("transform", "translateY(" + wScroll / 3 + "px)");
  $(".logo").css("transform", "translateY(" + wScroll / 2.2 + "px)");
  $(".fore-bird").css("transform", "translateY(-" + wScroll / 2.2 + "px)");
  if (wScroll > lastScroll && wScroll > modelTop - modelHeight) {
    model_show_hide(true);
  }
  if (wScroll < lastScroll && wScroll < modelTop + modelHeight) {
    model_show_hide(false);
  }
  lastScroll = wScroll;
})
