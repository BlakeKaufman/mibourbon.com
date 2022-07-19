"use strict";

// Making the nav pop donw
const menu = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobileNav");
let moblileUl = document.querySelector(".mobileUl");

function switchNav() {
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
    moblileUl.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
    moblileUl.style.display = "none";
  }
}

menu.addEventListener("click", switchNav);

// making the scroll to top feature on button
const mybutton = document.querySelector("#myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTo({ top: 0, behavior: "smooth" }); // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}

// adding scrole functionality to buttons
function scrollToPosition(position) {
  let y =
    document.querySelector(`.${position}`).getBoundingClientRect().top +
    window.pageYOffset -
    100;
  if (position === "ourStory" || position === "contact") {
    mobileNav.style.display = "none";
    moblileUl.style.display = "none";
  } else if (position === "barrels") {
    y =
      document.querySelector(`.${position}`).getBoundingClientRect().top +
      window.pageYOffset +
      0;
  }
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
