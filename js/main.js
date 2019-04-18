const navbarBtn = document.querySelector(".nav_bar__btn");
const navbarLinks = document.querySelector(".nav_bar__links");

navbarBtn.addEventListener("click", function() {
  let value = navbarLinks.classList.contains("nav_bar__collapse");

  if (value) {
    navbarLinks.classList.remove("nav_bar__collapse");
    navbarBtn.classList.remove("change");
  } else {
    navbarLinks.classList.add("nav_bar__collapse");
    navbarBtn.classList.add("change");
  }
});
