var URL = "https://play.google.com/store/apps/details?id=com.juetnowapp";
function goToPlay() {
  window.open(URL, "_blank");
}

(function () {
  "use strict";

  /**
   * Screenshot slider
   */
  new Swiper(".screenshot-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
})();
