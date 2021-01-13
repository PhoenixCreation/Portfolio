// DOM elements
let contactBtn = document.getElementById("contact--btn");

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

// contactBtn.addEventListener("click", () => {
//   alert("conatcting me? naaahh");
// });
