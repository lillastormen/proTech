// let lastScrollPosition = 0;

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".desktop nav");
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition) {
//     navbar.style.transform = "translateY(-280%)"; // Move the navbar outside the page when scrolling down
//   } else {
//     navbar.style.transform = "translateY(0)"; // Move the navbar to the top of the page
//   }

//   lastScrollPosition = currentScrollPosition;
// });

// Animate the navbar when scrolling//

// let lastScrollPosition = 0;

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".desktop nav");
//   const topBanner = document.querySelector(".topBanner");
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition) {
//     navbar.style.transform = "translateY(-120%)"; // Move the navbar outside the page when scrolling down
//     if (currentScrollPosition > topBanner.offsetHeight) {
//       topBanner.style.display = "none"; // Hide the topBanner when it's outside the viewport
//     }
//   } else {
//     navbar.style.transform = "translateY(0)"; // Move the navbar to the top of the page
//     if (currentScrollPosition <= topBanner.offsetHeight) {
//       topBanner.style.display = "block"; // Show the topBanner when it's in the viewport
//     }
//   }

//   lastScrollPosition = currentScrollPosition;
// });

// let lastScrollPosition = 0;

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".desktop nav");
//   const currentScrollPosition = window.scrollY;

//   if (currentScrollPosition > lastScrollPosition) {
//     navbar.style.transform = "translateY(-120%)"; // Move the navbar outside the page when scrolling down
//   } else {
//     navbar.style.transform = "translateY(0)"; // Move the navbar to the top of the page
//   }

//   lastScrollPosition = currentScrollPosition;
// });

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".desktop nav");
  const topBanner = document.querySelector(".topBanner");
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    if (currentScrollPosition > topBanner.offsetHeight) {
      navbar.style.transform = "translateY(-150%)"; // Move the navbar less outside the page when the topBanner is not in view
    } else {
      navbar.style.transform = "translateY(-120%)"; // Move the navbar outside the page when scrolling down
    }
  } else {
    navbar.style.transform = "translateY(0)"; // Move the navbar to the top of the page
  }

  lastScrollPosition = currentScrollPosition;
});
