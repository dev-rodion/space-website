window.onload = function () {
  new Glider(document.getElementById("slider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    rewind: true,
    draggable: true,
    dragVelocity: 2,
    arrows: {
      prev: ".arrow_prev",
      next: ".arrow_next",
    },
  });
};
