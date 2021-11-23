window.onload = function () {
  AOS.init({
    duration: 1000,
    delay: 200,
  });

  // Select all the smooth links
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  // Handle smooth links
  for (const smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();

      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  //
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const navbarBg = document.querySelector(".navbar__bg");

  const navLinks = document.querySelectorAll(".navbar__link");

  console.log(navbar.className.includes("active"), navbar.className);

  burger.addEventListener("click", function () {
    if (navbar.className.includes("active")) {
      hideNav();
    } else {
      showNav();
    }
  });

  navbarBg.addEventListener("click", hideNav);

  for (const navLink of navLinks) {
    navLink.addEventListener("click", function () {
      hideNav();
    });
  }

  function showNav() {
    document.body.style.overflow = "hidden";
    burger.classList.add("burger_active");
    navbar.classList.add("navbar_active");
    navbarBg.classList.add("navbar__bg_active");
  }
  function hideNav() {
    document.body.style.overflow = "";
    burger.classList.remove("burger_active");
    navbar.classList.remove("navbar_active");
    navbarBg.classList.remove("navbar__bg_active");
  }

  // Tiny Slider
  var slider = tns({
    container: ".slider",
    items: 1,
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    lazyload: true,
    speed: 400,
    controlsContainer: ".slider__arrows",
    nav: false,
  });
};
