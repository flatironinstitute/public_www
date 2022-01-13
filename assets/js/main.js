/*
	Public User Page Template
    Flatiron Institute
	flatironinstitute.org
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $footer = $("#footer"),
    $main = $("#main"),
    $nav = $('#nav'),
    settings = {
      // Parallax background effect?
      parallax: true,

      // Parallax factor (lower = more intense, higher = less intense).
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
  breakpoints.on("<=medium", function () {
    $footer.insertAfter($main);
  });

  breakpoints.on(">medium", function () {
    $footer.appendTo($header);
  });

  // Header.

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
  var $nav_a = $nav.find('a');

  $nav_a
    .addClass('scrolly')
    .on('click', function() {

      var $this = $(this);

      // External link? Bail.
        if ($this.attr('href').charAt(0) != '#')
          return;

      // Deactivate all links.
        $nav_a.removeClass('active');

      // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
        $this
          .addClass('active')
          .addClass('active-locked');

    })
    .each(function() {

      var	$this = $(this),
        id = $this.attr('href'),
        $section = $(id);

      // No section for this link? Bail.
        if ($section.length < 1)
          return;

      // Scrollex.
        $section.scrollex({
          mode: 'middle',
          top: '5vh',
          bottom: '5vh',
          initialize: function() {

            // Deactivate section.
              $section.addClass('inactive');

          },
          enter: function() {

            // Activate section.
              $section.removeClass('inactive');

            // No locked links? Deactivate all links and activate this section's one.
              if ($nav_a.filter('.active-locked').length == 0) {

                $nav_a.removeClass('active');
                $this.addClass('active');

              }

            // Otherwise, if this section's link is the one that's locked, unlock it.
              else if ($this.hasClass('active-locked'))
                $this.removeClass('active-locked');

          }
        });

    });


})(jQuery);
