const canvas = document.querySelector("#verticalLine");
const ctx = canvas.getContext("2d");

// draw a vertical line
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = "#fff";
ctx.moveTo(150, 50);
ctx.lineTo(150, 2474);
ctx.stroke();

document.addEventListener("scroll", scrollHandler);

// activate on mouse scroll movement
function scrollHandler() {
  if (isInViewport(document.querySelector("#circle4"))) {
    showLeftMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1943"),
      document.querySelector("#circle4")
    );
  }
  if (isInViewport(document.querySelector("#circle5"))) {
    showRightMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1946"),
      document.querySelector("#circle5")
    );
  }
  if (isInViewport(document.querySelector("#circle6"))) {
    showLeftMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1956"),
      document.querySelector("#circle6")
    );
  }
  if (isInViewport(document.querySelector("#circle7"))) {
    showRightMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1957"),
      document.querySelector("#circle7")
    );
  }
  if (isInViewport(document.querySelector("#circle8"))) {
    showLeftMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1967"),
      document.querySelector("#circle8")
    );
  }
  if (isInViewport(document.querySelector("#circle9"))) {
    showRightMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1977"),
      document.querySelector("#circle9")
    );
  }
  if (isInViewport(document.querySelector("#circle10"))) {
    showLeftMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox1985"),
      document.querySelector("#circle10")
    );
  }
  if (isInViewport(document.querySelector("#circle11"))) {
    showRightMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox2000"),
      document.querySelector("#circle11")
    );
  }
  if (isInViewport(document.querySelector("#circle12"))) {
    showLeftMessageBoxAndChangeCircleColor(
      document.querySelector("#messageBox2005"),
      document.querySelector("#circle12")
    );
  }
}

// check if the element is visible inside the browser window
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

function showLeftMessageBoxAndChangeCircleColor(leftMessageBox, circle) {
  leftMessageBox.style.opacity = "1";
  leftMessageBox.style.right = "52.5%";
  circle.style.backgroundColor = "#f45b69";
}

function showRightMessageBoxAndChangeCircleColor(rightMessageBox, circle) {
  rightMessageBox.style.opacity = "1";
  rightMessageBox.style.left = "52.5%";
  circle.style.backgroundColor = "#f45b69";
}
