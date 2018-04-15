$(function () {
   "use strict";
   $('.carousel').carousel({
      pause: false
   });
})

$(function () {
   $(".col").mouseenter(function() {
      $(".carousel-control-prev, .carousel-control-next").css("visibility", "visible");
   });
   $(".col").mouseleave(function() {
      $(".carousel-control-prev, .carousel-control-next").css("visibility", "hidden");
   });
})

