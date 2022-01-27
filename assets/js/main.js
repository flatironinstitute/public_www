/*
  Public User Page Template
    Flatiron Institute
  flatironinstitute.org
*/

(function ($) {
  let $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $footer = $("#footer"),
    $titleBar = null,
    $val = null,
    $nav = $("#nav"),
    $year = $("#year"),
    $center = $("#center"),
    settings = {
      parallax: true,
      parallaxFactor: 20,
    };

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1800px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    // Add Date
    const today = new Date();
    $year.textContent += `, ${today.getFullYear()}`;

    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Touch?
  if (browser.mobile) {
    // Turn on touch mode.
    $body.addClass("is-touch");

    // Height fix (mostly for iOS).
    window.setTimeout(function () {
      $window.scrollTop($window.scrollTop() + 1);
    }, 0);
  }

  // Footer.
  $footer.appendTo($header);

  // Header.
  // Title Bar.
  $titleBar = $(
    '<div id="titleBar">' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      '<a href="#header" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $header.panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: "right",
    target: $body,
    visibleClass: "header-visible",
  });

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 1000,
    offset: function () {
      if (breakpoints.active("<=medium")) return $titleBar.height();

      return 0;
    },
  });

  // Parallax background.

  // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
  if (browser.name == "ie" || browser.mobile) settings.parallax = false;

  if (settings.parallax) {
    breakpoints.on("<=medium", function () {
      $window.off("scroll.strata_parallax");
      $header.css("background-position", "");
    });

    breakpoints.on(">medium", function () {
      $header.css("background-position", "left 0px");

      $window.on("scroll.strata_parallax", function () {
        $header.css(
          "background-position",
          "left " +
            -1 * (parseInt($window.scrollTop()) / settings.parallaxFactor) +
            "px"
        );
      });
    });

    $window.on("load", function () {
      $window.triggerHandler("scroll");
    });
  }

  // Nav.
  let $nav_a = $nav.find("a");
  $nav_a
    .addClass("scrolly")
    .on("click", function () {
      var $this = $(this);

      // External link? Bail.
      if ($this.attr("href").charAt(0) != "#") return;

      // Deactivate all links.
      $nav_a.removeClass("active");

      // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
      $this.addClass("active").addClass("active-locked");
    })
    .each(function () {
      var $this = $(this),
        id = $this.attr("href"),
        $section = $(id);

      // No section for this link? Bail.
      if ($section.length < 1) return;

      // Scrollex.
      $section.scrollex({
        mode: "default",
        top: "5vh",
        bottom: "5vh",
        initialize: function () {
          // Deactivate section.
          $section.addClass("inactive");
        },
        enter: function () {
          // Activate section.
          $section.removeClass("inactive");

          // No locked links? Deactivate all links and activate this section's one.
          if ($nav_a.filter(".active-locked").length == 0) {
            $nav_a.removeClass("active");
            $this.addClass("active");
          }

          // Otherwise, if this section's link is the one that's locked, unlock it.
          else if ($this.hasClass("active-locked"))
            $this.removeClass("active-locked");
        },
      });
    });

  // Lightbox gallery.
  $window.on("load", function () {
    $("#research").poptrox({
      caption: function ($a) {
        return $a.children("img").attr("alt");
      },
      overlayColor: "#2c2c2c",
      overlayOpacity: 0.85,
      popupCloserText: "",
      popupLoaderText: "",
      selector: ".work-item a.image",
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
      windowMargin: breakpoints.active("<=small") ? 0 : 50,
    });
  });

  const logoIcon = Array.from(
    document.querySelectorAll("span.title > #logo-icon")
  )[0];
  if (logoIcon) {
    logoIcon.addEventListener("click", function () {
      window.open("https://www.simonsfoundation.org/flatiron/");
      return false;
    });
  }
})(jQuery);
