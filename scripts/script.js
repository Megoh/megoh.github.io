var amountOfCSSInjectionsLeft = 1;

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

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.txt === fullTxt) {
    delta = this.period;
    // inject css
    if (amountOfCSSInjectionsLeft === 1) {
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML =
        ".typewrite > .wrap { border-right: .15em solid #000; animation: blink-caret 0.75s step-end infinite; }";
      document.body.appendChild(css);
      amountOfCSSInjectionsLeft = 0;
    }
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
