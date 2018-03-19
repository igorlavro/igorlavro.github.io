(function($, undefined){

  var $hamburger = $('.hamburger');
  var $mainNav = $('.main-nav');
  var $body = $('body');
  var $slideReviewsActive = $('.owl-item.active .slide-reviews');
  var $navLink = $('.nav-link');
  var $title = $('.title');

  $hamburger.click(function(e) {
    e.preventDefault();
    $hamburger.toggleClass('hamburger_active');
    $mainNav.toggleClass('main-nav_active');
    // $body.toggleClass('overflow-hidden');
  });

  $mainNav.click(function() {
    $hamburger.toggleClass('hamburger_active');
    $mainNav.toggleClass('main-nav_active');
    // $body.toggleClass('overflow-hidden');
  });

  $('div.services-button').on('click', 'button:not(.btn-switch_active)', function() {
    $(this)
    .addClass('btn-switch_active').siblings().removeClass('btn-switch_active')
    .closest('div.services-content-wrap').find('div.services-types').removeClass('services-types_active').eq($(this).index()).addClass('services-types_active');
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    smartSpeed: 700,
    dotsEach: true,
    navElement: ('button'),
    responsiveClass: true,
    responsiveBaseElement: ('body'),
    responsive:{
      0:{
        items: 1,
        nav: false
      },
      992:{
        items: 1,
        nav: true
      },
      1200:{
        items: 2,
        nav: true
      }
    }
  });

  var titlePaddingTop = $title.css('padding-top');
  if (titlePaddingTop == "145px") {
    var offset = -130;
  } else {
    var offset = -35;
  }

  $navLink.mPageScroll2id({
    offset: offset
  });

})(jQuery);
