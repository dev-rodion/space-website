window.onload = function () {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();

      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

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

  // new Glider(document.getElementById("slider"), {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   scrollLock: true,
  //   rewind: true,
  //   draggable: true,
  //   dragVelocity: 2,
  //   arrows: {
  //     prev: ".arrow_prev",
  //     next: ".arrow_next",
  //   },
  // });
};
