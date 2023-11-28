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

// Mobile menu

document.querySelector(".burgerMenu").addEventListener("click", function () {
  document.querySelector(".mobileToggled").classList.remove("hide");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".mobileToggled").classList.add("hide");
});

// Desktop menu

document.querySelectorAll(".menuButton").forEach(function (menuButton) {
  menuButton.addEventListener("click", function () {
    document.querySelector(".desktopToggled").classList.toggle("hide");
  });
});

// New code to hide the .close element in desktopCenter when .desktopToggled is clicked
document
  .querySelector(".desktopCenter .close")
  .addEventListener("click", function () {
    document.querySelector(".desktopToggled").classList.add("hide");
  });

document.querySelector(".logoDesktop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
