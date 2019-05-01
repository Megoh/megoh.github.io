$(function() {
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function() {
    navMain.collapse("hide");
  });
});

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}

var items = document.querySelectorAll(".row");

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
