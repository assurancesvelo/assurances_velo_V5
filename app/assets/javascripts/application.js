// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require_tree .


var quotes_headline = [
"VTT",
"Vélo électrique",
"Vélo de course"
];

var i = 0;

setInterval(function() {
  $("#textsvelo").html(quotes_headline[i]);
  if (i == quotes_headline.length-1)
    i=0;
  else
    i++;
}, 3 * 1000);


var quotes_bottomline1 = [
"la casse",
"la casse",
"la casse et le vol",
];

var j = 0;

setInterval(function() {
  $("#textsgarantie").html(quotes_bottomline1[i]);
  if (j == quotes_bottomline1.length-1)
    j=0;
  else
    j++;
}, 3 * 1000);

// ScrollTrigger fonction
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']') ;
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 2000);
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#btn-devis-nav").removeClass("btn-hide");
      $("#btn-souscrire-nav").removeClass("btn-hide");
      $("#btn-antivol-nav").addClass("btn-hide");
      $("#btn-faq-nav").addClass("btn-hide");
      $("#btn-challenge-nav").addClass("btn-hide");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#btn-devis-nav").addClass("btn-hide");
      $("#btn-souscrire-nav").addClass("btn-hide");
      $("#btn-antivol-nav").removeClass("btn-hide");
      $("#btn-faq-nav").removeClass("btn-hide");
      $("#btn-challenge-nav").removeClass("btn-hide");
    }
  });

})(jQuery); // End of use strict




