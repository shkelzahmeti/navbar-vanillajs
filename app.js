const btnNavEl = document.querySelector(".nav-toggle");
const navLinksEl = document.querySelector(".links");

btnNavEl.addEventListener("click", function () {
  navLinksEl.classList.toggle("show-links");
});
