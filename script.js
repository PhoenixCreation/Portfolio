console.log("check js");
var p = document.getElementById("piller");
var t = document.getElementById("topshelf");
var trigger = document.getElementById("trigger");
const p_on_hover = p.attributes["data-anim-path-hover"].nodeValue;
const p_on_out = p.attributes["data-anim-path-to"].nodeValue;
const t_on_hover = t.attributes["data-anim-translate-hover"].nodeValue;
const t_on_out = t.attributes["data-anim-translate-to"].nodeValue;
trigger.addEventListener("mouseover", () => {
  console.log("mouse over");
  p.setAttribute("d", p_on_hover);
  t.style.transform = `matrix(1, 0, 0, 1, 0, ${t_on_hover})`;
});
trigger.addEventListener("pointerleave", () => {
  console.log("mouse out");
  p.setAttribute("d", p_on_out);
  t.style.transform = `matrix(1, 0, 0, 1, 0, ${t_on_out})`;
});
