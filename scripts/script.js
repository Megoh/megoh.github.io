$(function() {
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function() {
    navMain.collapse("hide");
  });
});
