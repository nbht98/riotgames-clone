const navTogglerOpen = document.querySelector(".navbar-toggler-open");
const navTogglerClose = document.querySelector(".navbar-toggler-close");
const navCollapse = document.querySelector(".navbar-collapse");
const search = document.querySelector(".search-icon-group");
const scrollToTopBtn = document.querySelector(".to-surface");
const rootElement = document.documentElement;

const navLeftTogglerOpen = document.querySelector(".navbar__left-toggler-open");
const navLeftTogglerClose = document.querySelector(".navbar__left-toggler-close");
const navLeftCollapse = document.querySelector(".navbar__left-collapse");
const body = document.querySelector("body");


navTogglerOpen.addEventListener("click", () => {
  navCollapse.classList.add("show-navbar");
  search.classList.add("show-search");
});

navTogglerClose.addEventListener("click", () => {
  navCollapse.classList.remove("show-navbar");
  search.classList.remove("show-search");
});

scrollToTopBtn.addEventListener("click", () => {
  console.log(1)
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navLeftTogglerOpen.addEventListener("click", () => {
  navLeftCollapse.classList.add("show-navbar__left");
  body.classList.add("hide-scroll")
});

navLeftTogglerClose.addEventListener("click", () => {
  navLeftCollapse.classList.remove("show-navbar__left");
  body.classList.remove("hide-scroll")
});


// window.addEventListener('scroll', () => {
//   console.log(this)
// })
