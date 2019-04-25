"use strict";

const firstDigitSlot = document.querySelector("#firstDigit");
const secondDigitSlot = document.querySelector("#secondDigit");
const thirdDigitSlot = document.querySelector("#thirdDigit");
const fourthDigitSlot = document.querySelector("#fourthDigit");

function handleRestartClick(e) {
  document.querySelector("#countdown").style["opacity"] = "1.0";
  const restart = document.querySelector("#restart");
  restart.parentNode.removeChild(restart);
  // set minutes to 1X:XX
  firstDigitSlot.scrollTop = 229;
  // set minutes to X2:XX
  secondDigitSlot.scrollTop = 458;
  // set seconds to XX:3X
  thirdDigitSlot.scrollTop = 687;
  scrollSeconds(916, fourthDigitSlot);
}

// set minutes to 1X:XX
firstDigitSlot.scrollTop = 0;
// set minutes to X2:XX
secondDigitSlot.scrollTop = 0;
// set seconds to XX:3X
thirdDigitSlot.scrollTop = 0;

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// main function
function scrollSeconds(scrollTargetY, digitSlot) {
  var scrollTop = digitSlot.scrollTop,
    scrollTargetY = scrollTargetY || 0,
    currentTime = 0;

  var time = 1;

  function easeOutQuint(pos) {
    return 1 + --pos * pos * pos * pos * pos;
  }

  // add animation loop
  function tick() {
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easeOutQuint(p);

    if (p < 1) {
      requestAnimFrame(tick);
      digitSlot.scrollTo(0, scrollTop + (scrollTargetY - scrollTop) * t);
    } else {
      digitSlot.scrollTo(0, scrollTargetY);
      if (scrollTargetY === 0) {
        if (
          firstDigitSlot.scrollTop < 229 &&
          secondDigitSlot.scrollTop < 229 &&
          thirdDigitSlot.scrollTop < 229
        ) {
          document.querySelector("#countdown").style["opacity"] = "0.2";
          const restartCountdown = document.createElement("span");
          restartCountdown.setAttribute("id", "restart");
          const restartCountdownText = document.createTextNode(
            "NOW, WITH 12:34"
          );
          restartCountdown.appendChild(restartCountdownText);
          document.querySelector("#wrapper").appendChild(restartCountdown);
          const restart = document.querySelector("#restart");
          restart.addEventListener("click", handleRestartClick, false);
          return;
        }
        //reset seconds back to XX:X9
        scrollSeconds(2061, digitSlot);
        //reset minutes back to XX:X5
        if (thirdDigitSlot.scrollTop === 0) {
          scrollOnce(1145, thirdDigitSlot);
          if (secondDigitSlot.scrollTop === 0) {
            scrollOnce(2061, secondDigitSlot);
            if (firstDigitSlot.scrollTop === 0) {
              document.querySelector("#countdown").style["opacity"] = "0.2";
            } else {
              scrollOnce(firstDigitSlot.scrollTop - 229, firstDigitSlot);
            }
          } else {
            scrollOnce(secondDigitSlot.scrollTop - 229, secondDigitSlot);
          }
        } else {
          scrollOnce(thirdDigitSlot.scrollTop - 229, thirdDigitSlot);
        }
      } else {
        scrollSeconds(scrollTargetY - 229, digitSlot);
      }
    }
  }

  // call it once to get started
  tick();
}

function scrollOnce(scrollTargetY, digitSlot) {
  var scrollTop = digitSlot.scrollTop,
    scrollTargetY = scrollTargetY || 0,
    currentTime = 0;

  var time = 1;

  function easeOutQuint(pos) {
    return 1 + --pos * pos * pos * pos * pos;
  }

  // add animation loop
  function tick() {
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easeOutQuint(p);

    if (p < 1) {
      requestAnimFrame(tick);
      digitSlot.scrollTo(0, scrollTop + (scrollTargetY - scrollTop) * t);
    } else {
      digitSlot.scrollTo(0, scrollTargetY);
    }
  }

  // call it once to get started
  tick();
}

// start the countdown at 12:34
scrollSeconds(2061, fourthDigitSlot);
