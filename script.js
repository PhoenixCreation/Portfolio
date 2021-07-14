// DOM elements
let contactBtn = document.getElementById("contact--btn");
let scrolldown = document.getElementById("scrolldown--cont");
let scrollCont = document.getElementById("myMenu");
let backCircs = document.querySelectorAll("[class^=background--c]");
let contactForm = document.getElementById("contact--form--container");
contactForm.style.display = "none";

// // fullpage js
new fullpage("#fullpage", {
  anchors: ["home", "about", "projects", "contact"],
  menu: "#myMenu",
  verticalCentered: false,
  onLeave: function (origin, destination) {
    backCircs.forEach((circle) => {
      circle.style.animation = `backgroundSVG${destination.index} 0.7s linear`;
    });
    if (origin.index === 0) {
      // from 1st page to other page
      contactBtn.classList.add("other--contact");
      contactBtn.classList.remove("first--contact");
      scrolldown.classList.remove("active");
    }
    if (destination.index === 0) {
      // back to first page
      scrolldown.classList.add("active");
      contactBtn.classList.remove("other--contact");
      contactBtn.classList.remove("projects--contact");
      contactBtn.classList.remove("contact--contact");
      contactBtn.classList.remove("about--contact");
      contactBtn.classList.add("first--contact");
      scrollCont.classList.remove("on--contact");
    }
    if (destination.index === 1) {
      // coming on about page from somewhere
      contactBtn.classList.remove("projects--contact");
      contactBtn.classList.remove("contact--contact");
      contactBtn.classList.add("about--contact");
      scrolldown.classList.remove("active");
      scrollCont.classList.remove("on--contact");
    }
    if (destination.index === 2) {
      // coming on projects page from somewhere
      contactBtn.classList.remove("about--contact");
      contactBtn.classList.remove("contact--contact");
      contactBtn.classList.add("projects--contact");
      scrolldown.classList.remove("active");
      scrollCont.classList.remove("on--contact");
    }
    if (destination.index === 3) {
      // coming on contact page from somewhere
      contactBtn.classList.remove("projects--contact");
      contactBtn.classList.remove("about--contact");
      contactBtn.classList.add("contact--contact");
      scrolldown.classList.remove("active");
      scrollCont.classList.add("on--contact");
    }
  },
});

if (location.hostname != "localhost" && location.hostname != "127.0.0.1") {
  let user_info = "";
  user_info += "`Browser CodeName: " + navigator.appCodeName + "` \n";
  user_info += "`Browser Name: " + navigator.appName + "` \n";
  user_info += "`\n`";
  user_info += "`Browser Version: " + navigator.appVersion + "` \n";
  user_info += "`Cookies Enabled: " + navigator.cookieEnabled + "` \n";
  user_info += "`Browser Language: " + navigator.language + "` \n";
  user_info += "`Browser Online: " + navigator.onLine + "` \n";
  user_info += "`\n`";
  user_info += "`Platform: " + navigator.platform + "` \n";
  user_info += "`User-agent header: " + navigator.userAgent + "` \n";
  user_info += "`\n`";
  user_info += "`Date formate: " + new Date().toString() + "` \n";

  fetch(
    "https://discord.com/api/webhooks/800229959875821630/sq6qQNbWZbg8-x4u-qVIQBT3ql9lqmCYqph0Eu_d7e341MJJtJ06NeeGsQlTKTYZsMw2",
    {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        username: "Netlify Portfolio",
        content: "---------------------------------",
        embeds: [
          {
            title: "Netlify",
            url: "https://phoenixcreation.netlify.app",
            description:
              "This is notification about someone visiting your netlify portfolio.",
            color: Math.floor(Math.random() * 16777215),
            fields: [
              {
                name: "Full headers",
                value: user_info,
              },
              {
                name: "Actions to take",
                value:
                  "Just chill man. This is just so that you get to know some one is visiting you.",
              },
            ],
          },
        ],
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
}

const showForm = () => {
  contactForm.style.display = "flex";
};

const closeForm = () => {
  contactForm.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == contactForm) {
    closeForm();
  }
};

window.onmousemove = (event) => {
  backCircs.forEach((circle, index) => {
    let offset = (index + 1) * 30;
    let { x, y } = event;
    let newX = x - window.innerWidth / 2;
    let newY = y - window.innerHeight / 2;
    newX = (newX * offset * -1) / (window.innerWidth * 0.33);
    newY = (newY * offset * -1) / (window.innerHeight * 0.33);
    circle.style.transform = `translate(${newX}px, ${newY}px) scale(2)`;
  });
};

// I am not liking the meteor system... but if wanted just uncomment this
// let meteor = document.getElementById("mouse--orbitor");

// document.addEventListener("mousemove", (event) => {
//   let x = event.clientX - 15;
//   let y = event.clientY - 15;
//   meteor.style.left = x + "px";
//   meteor.style.top = y + "px";
// });

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
