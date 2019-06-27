"use strict";

const navToggler = document.querySelector("#navToggler");
const nav = document.querySelector("#nav");
const navList = document.querySelector("#navList");
const navListItems = document.querySelectorAll(".nav-list__item");

const projects = document.querySelectorAll(".my-projects__project");

let amountOfCSSInjectionsLeft = 1;

function collapseNavMenu() {
  nav.classList.remove("expanded");
}

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

let TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 10000;
  this.txt = "";
  this.tick();
};

TxtType.prototype.tick = function() {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  this.txt = fullTxt.substring(0, this.txt.length + 1);

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  let that = this;
  let delta = 100 - Math.random() * 100;

  if (this.txt === fullTxt) {
    delta = this.period;
    // inject css
    if (amountOfCSSInjectionsLeft === 1) {
      let css = document.createElement("style");
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
  let elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute("data-type");
    let period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

function toggleNavbar() {
  nav.classList.toggle("expanded");
}

function showProject() {
  for (let i = 0; i < projects.length; i++) {
    if (isInViewport(projects[i])) {
      projects[i].classList.add("in-view");
    }
  }
}

navToggler.addEventListener("click", toggleNavbar);
navListItems.forEach(i => i.addEventListener("click", collapseNavMenu));
window.addEventListener("load", showProject);
window.addEventListener("resize", showProject);
window.addEventListener("scroll", showProject);
