$(document).ready(function () {
  $("#burger").on("click", function () {
    $(".links").addClass("open-side");
  });
  $("#closse-side").on("click", function () {
    $(".links").removeClass("open-side");
    $(this).animate(
      {
        boxShadow: "5px 10px 30px 30px #720707a1",
        // background: "red",
      },
      100
    );
  });
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
    //options here
    anchors: ["Page1", "Page2", "Page3", "Page4", "Page5"],
    afterLoad: function (origin, destination, direction) {
      var loadedSection = this;
      var imgSrc = $("#img-src");

      //usando su índice
      if (destination.anchor == "Page1") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
        );
      }

      //usando su link de anclaje
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

      //usando su link de anclaje
      if (destination.anchor == "Page4") {
        imgSrc.attr(
          "src",
          "https://una.era-solutions.com/stefan-book/wp-content/uploads/2021/08/digital-leadership_logo_standard-logo_white.svg"
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
});
