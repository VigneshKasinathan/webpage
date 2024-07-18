const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("nav-open");

  // if needed to toggle multiple classes
  // const toggleClasses = ["nav-open", "overflow-hidden"];
  // toggleClasses.forEach((toggleClass) => body.classList.toggle(toggleClass));
});


const searchIcon = document.querySelector(".search-icon__wrapper");

searchIcon.addEventListener("click", e => searchIcon.parentElement.classList.toggle("open"))

