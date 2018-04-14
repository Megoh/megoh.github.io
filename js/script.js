$(function () {
   "use strict";
   $('.carousel').carousel({
      pause: false
   });
})

$(function () {
   $(".carousel").mouseenter(function() {
      $(".carousel-control-prev, .carousel-control-next").css("visibility", "visible");
   });
   $(".carousel").mouseleave(function() {
      $(".carousel-control-prev, .carousel-control-next").css("visibility", "hidden");
   });
})