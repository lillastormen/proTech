let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".desktop nav");
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition === 0) {
    navbar.style.transform = "translateY(85px)"; // Push the navbar down 60px when at the top of the page
  } else if (currentScrollPosition > lastScrollPosition) {
    navbar.style.transform = "translateY(-100%)"; // Move the navbar outside the page when scrolling down
  } else {
    navbar.style.transform = "translateY(0)"; // Move the navbar to the top of the page when scrolling up
  }

  lastScrollPosition = currentScrollPosition;
});
