window.onload = function () {
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
