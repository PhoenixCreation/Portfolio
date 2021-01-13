// DOM elements
let contactBtn = document.getElementById("contact--btn");
let meteor = document.getElementById("mouse--orbitor");

// fullpage js
var myFullpage = new fullpage("#fullpage", {
  anchors: ["home", "about", "projects", "contact"],
  menu: "#myMenu",
  verticalCentered: false,
  onLeave: function (origin, destination, direction) {
    if (origin.index === 0) {
      // from 1st page to other page
      contactBtn.classList.add("other--contact");
      contactBtn.classList.remove("first--contact");
    }
    if (destination.index === 0) {
      // back to first page
      contactBtn.classList.remove("other--contact");
      contactBtn.classList.remove("projects--contact");
      contactBtn.classList.remove("contact--contact");
      contactBtn.classList.remove("about--contact");
      contactBtn.classList.add("first--contact");
    }
    if (destination.index === 1) {
      // coming on about page from somewhere
      contactBtn.classList.remove("projects--contact");
      contactBtn.classList.remove("contact--contact");
      contactBtn.classList.add("about--contact");
    }
    if (destination.index === 2) {
      // coming on projects page from somewhere
      contactBtn.classList.remove("about--contact");
      contactBtn.classList.remove("contact--contact");
      contactBtn.classList.add("projects--contact");
    }
    if (destination.index === 3) {
      // coming on contact page from somewhere
      contactBtn.classList.remove("projects--contact");
      contactBtn.classList.remove("about--contact");
      contactBtn.classList.add("contact--contact");
    }
  },
});
var angle = -Math.PI / 2;
document.addEventListener("mousemove", (event) => {
  let x = event.clientX + 25 * Math.sin(angle);
  let y = event.clientY + 25 * Math.cos(angle);
  angle += Math.PI / 100;
  meteor.style.left = x + "px";
  meteor.style.top = y + "px";
});

// Mobile check if required later....
// let mobile = false
// if (
//   navigator.userAgent.match(/Android/i) ||
//   navigator.userAgent.match(/webOS/i) ||
//   navigator.userAgent.match(/iPhone/i) ||
//   navigator.userAgent.match(/iPad/i) ||
//   navigator.userAgent.match(/iPod/i) ||
//   navigator.userAgent.match(/BlackBerry/i) ||
//   navigator.userAgent.match(/Windows Phone/i)
// ) {
//   mobile = true
// }
