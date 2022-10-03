/* Make navbar fixed when scrolled down and hide it when scrolled up */
const navbar = $(".navbar-top");
let previousScroll = 0;
$(window).on("scroll", function (event) {
  let currentScroll = $(window).scrollTop(); //Distance scrolled down the page
  let navHeight = $(navbar).height(); //Height of navbar
  if (currentScroll > 10) {
    $(".navbar-top").addClass("navbar-top--scrolled");
  } else {
    $(".navbar-top").removeClass("navbar-top--scrolled");
  }

  //When scrolling down AND you've scrolled past navHeight * 2.25, add .scrollUp
  if (currentScroll > previousScroll && currentScroll > navHeight * 2.25) {
    $(navbar).addClass("scrollUp");
    //When scrolling up AND you've scrolled less than navHeight, remove .scrollUp
  } else if (previousScroll > currentScroll && !(currentScroll <= navHeight)) {
    $(navbar).removeClass("scrollUp");
  }
  previousScroll = currentScroll;
});

/* Add navbar background color when it is not collapsed */
$("#navbarTopCollapsible").on("show.bs.collapse", function () {
  $(".navbar-top").addClass("bg-dark-trans");
});
$("#navbarTopCollapsible").on("hide.bs.collapse", function () {
  $(".navbar-top").removeClass("bg-dark-trans");
});

// footer change collapse in mobile size
$(window).on("resize", function () {
  var header = $(".collapse_header");

  if ($(window).width() < 561) {
    header.attr("data-toggle", "collapse");
    $(".footer__content-body-collapse").addClass("collapse");

    $(".footer__content-header").addClass("collapsed");
    $(".footer__content-header").css("cursor", "pointer");
  } else {
    $(".footer__content-header").removeClass("collapsed");
    $(".footer__content-body-collapse").removeClass("collapse");
    header.attr("data-toggle", "none");
  }
});

//owl-carousel
$(document).ready(function () {
  //footer init
  var header = $(".collapse_header");

  if ($(window).width() < 561) {
    header.attr("data-toggle", "collapse");
    $(".footer__content-body-collapse").addClass("collapse");

    $(".footer__content-header").addClass("collapsed");
    $(".footer__content-header").css("cursor", "pointer");
  } else {
    $(".footer__content-header").removeClass("collapsed");
    $(".footer__content-body-collapse").removeClass("collapse");
    header.attr("data-toggle", "none");
  }
  var owl = $("#owl_carousel");
  owl.owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  var lemon_owl = $("#lemon_owl_carousel");
  if (lemon_owl) {
    lemon_owl.owlCarousel({
      loop: true,
      margin: 15,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
  var story_owl = $("#story-owl_carousel");
  if (story_owl) {
    story_owl.owlCarousel({
      loop: true,
      margin: 15,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
});

/* scrollReveal */
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1200,
  delay: 400,
  // reset: true
});

sr.reveal(".auth_form");
sr.reveal(
  ".about__header, .benefits__header, .benefits__header-underline, .share__header, .share__subheader",
  {
    origin: "top",
    distance: "20px",
    duration: 1000,
    delay: 200,
  }
);
sr.reveal(".about__subtitle, .about__content", {
  origin: "bottom",
  distance: "40px",
  duration: "600",
  delay: 0,
});
sr.reveal(".about__left-img, .about__right-img", { origin: "left" });

sr.reveal(".idea", {
  origin: "bottom",
  distance: "20px",
  duration: 1000,
  delay: 300,
});

sr.reveal(".vision__img, .benefits__body", {
  origin: "left",
  distance: "60px",
  duration: 1500,
  delay: 500,
});
sr.reveal(
  ".vision__header, .vision__header-underline, .vision__content, .benefits__img",
  {
    origin: "right",
    distance: "40px",
    duration: 1500,
    delay: 400,
  }
);
sr.reveal(".next__body", {
  origin: "left",
  distance: "60px",
  duration: 1500,
  delay: 500,
});
sr.reveal(".next__img", {
  origin: "right",
  distance: "40px",
  duration: 1500,
  delay: 400,
});

//page2
sr.reveal(".collection__header, .collection__content", {
  origin: "top",
  distance: "30px",
  duration: 1000,
  delay: 200,
});
sr.reveal(".collection__content", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 1200,
});

sr.reveal(".collection_card-sr-1", {
  origin: "left",
  distance: "30px",
  duration: 1500,
  delay: 400,
});
sr.reveal(".collection_card-sr-2, .collection__card-small", {
  origin: "right",
  distance: "30px",
  duration: 1500,
  delay: 400,
  interval: 300,
});
sr.reveal(".recomm__left", {
  origin: "left",
  distance: "30px",
  duration: 1500,
  delay: 400,
});
sr.reveal(".recomm__right", {
  origin: "right",
  distance: "30px",
  duration: 1500,
  delay: 400,
});

//page18
sr.reveal(".error__img", {
  origin: "top",
  distance: "40px",
  duration: 1000,
  delay: 200,
});
sr.reveal(".error__title, .error__content, .error__link", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 600,
  interval: 300,
});

//page17
sr.reveal(".content__header, .content__content", {
  origin: "left",
  distance: "30px",
  duration: 800,
  delay: 300,
  interval: 400,
});
sr.reveal(".content__img, .content__content", {
  origin: "right",
  distance: "30px",
  duration: 800,
  delay: 300,
});
sr.reveal(".text__content", {
  origin: "right",
  distance: "30px",
  duration: 1000,
  delay: 400,
  interval: 400,
});
sr.reveal(".comment__header", {
  origin: "top",
  distance: "30px",
  duration: 1000,
  delay: 300,
});
sr.reveal(".comment__form", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 600,
});

//page19
sr.reveal(".page19-dark-card, .page19-card", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 200,
  interval: 300,
});

sr.reveal(".special__header, .special__content, .btn_more", {
  origin: "left",
  distance: "40px",
  duration: 1000,
  delay: 300,
});

//page21
sr.reveal(".article__body", {
  origin: "right",
  distance: "30px",
  duration: 1000,
  delay: 200,
  interval: 400,
});

//page10
sr.reveal(".content__img-2", {
  origin: "right",
  distance: "30px",
  duration: 1000,
  delay: 300,
});
sr.reveal(".strive__header, .strive__content", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 300,
});

//page5
sr.reveal(".content__img-1, .content__body", {
  origin: "left",
  distance: "30px",
  duration: 1000,
  delay: 300,
});
sr.reveal(".content__name, .marketing__how-content, .marketing__how-img", {
  origin: "right",
  distance: "30px",
  duration: 1000,
  delay: 500,
});
sr.reveal(
  ".marketing__title, .marketing__title-underline, .marketing__content, .reach__content, .reach__title",
  {
    origin: "top",
    distance: "30px",
    duration: 800,
    delay: 300,
  }
);
sr.reveal(".marketing__vision-img, .marketing__how-title", {
  origin: "left",
  distance: "30px",
  duration: 800,
  delay: 300,
});
sr.reveal(".marketing__right-header, .marketing__right", {
  origin: "right",
  distance: "30px",
  duration: 800,
  delay: 300,
  interval: 300,
});

//page9
sr.reveal(".content__title", {
  origin: "left",
  distance: "30px",
  duration: 1000,
  delay: 500,
});
sr.reveal(".serve__title, .serve__content, .serve__card,.serve__3card", {
  origin: "bottom",
  distance: "40px",
  duration: 800,
  delay: 400,
  interval: 400,
});
sr.reveal(".serve__brandcard", {
  origin: "right",
  distance: "30px",
  duration: 800,
  delay: 400,
  interval: 300,
});

//page8
sr.reveal(
  ".hearing__title, .hearing__content, .hearing__touch, .input_field, .story__card",
  {
    origin: "bottom",
    distance: "30px",
    duration: 800,
    delay: 400,
    interval: 300,
  }
);
sr.reveal(".business__title, .business__content", {
  origin: "left",
  distance: "30px",
  duration: 800,
  delay: 400,
  interval: 300,
});
sr.reveal(".business__img", {
  origin: "right",
  distance: "30px",
  duration: 800,
  delay: 400,
});

//page4
sr.reveal(
  ".policy__header, .policy__content, .policy__story-title, .policy__story-content",
  {
    origin: "right",
    distance: "30px",
    duration: 800,
    delay: 400,
    interval: 300,
  }
);
