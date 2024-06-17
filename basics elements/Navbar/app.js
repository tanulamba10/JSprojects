
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  console.log(links.classList);
  navToggle.classList.toggle("toggle-clicked");
  links.classList.toggle("show-links");
});
