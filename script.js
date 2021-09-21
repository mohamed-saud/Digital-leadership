$(document).ready(function () {
  $("#burger").on("click", function () {
    $(".links").toggleClass("open-side");
    $(this).toggleClass("anmat-burger");
  });
  // $("#closse-side").on("click", function () {
  //   $(".links").removeClass("open-side");
  //   $(".closse").animate("border", " 2px solid white");
  // });
  $(".right-colo").click(() => {
    $(".obturateur").animate(
      {
        strokeDashoffset: "1123",
      },
      0
    );
    $(".obturateur").animate(
      {
        strokeDashoffset: "0",
      },
      1500
    );
  });

  $("#fullpage").fullpage({
    anchors: [
      "Page1",
      "Page2",
      "Page3",
      "Page4",
      "Page5",
      "Page6",
      "Page7",
      "Page8",
    ],
    afterLoad: function (origin, destination, direction) {
      var loadedSection = this;
      var imgSrc = $("#img-src");

      if (destination.anchor == "Page1") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
        );
      }

      if (destination.anchor == "Page2") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_black.svg"
        );
      }
      if (destination.anchor == "Page3") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_black.svg"
        );
      }

      if (destination.anchor == "Page4") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
        );
      }
      if (destination.anchor == "Page5") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
        );
      }
      if (destination.anchor == "Page6") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
        );
      }
      if (destination.anchor == "Page7") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
        );
      }
      if (destination.anchor == "Page8") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_black.svg"
        );
      }
    },
    autoScrolling: true,
    scrollHorizontally: true,
    lockAnchors: false,
    navigation: false,
    navigationPosition: "right",
    navigationTooltips: ["firstSlide", "secondSlide"],
    showActiveTooltip: false,
    slidesNavigation: true,
    afterResize: function (width, height) {
      console.log(height);
    },
  });
  //methods

  fullpage_api.setAllowScrolling(true);

  ///////slider method
  function slider(time, parantClass, elment, classAct) {
    setInterval(() => {
      if ($(`.${parantClass} .${elment}.${classAct}`).is(":last-child")) {
        $(`.${parantClass} .${elment}:nth-child(1)`).addClass(classAct);
      }
      $(`.${parantClass} .${elment}.${classAct}`)
        .removeClass(classAct)
        .next()
        .addClass(classAct);
    }, time);
  }

  slider(2000, "sliderss", "slidee", "slected");
  slider(2000, "navigation-auto", "auto-btn", "active");
  slider(2000, "slider-contaner", "slid-item", "slected");
});
