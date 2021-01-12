// DOM elements
var pagers = document.getElementsByClassName("pager--indicator");
var myFullpage = new fullpage("#fullpage", {
  anchors: ["home", "about", "projects", "contact"],
  menu: "#myMenu",
  verticalCentered: false,
});
