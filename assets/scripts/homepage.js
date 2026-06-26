$(function () {
  $('.slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supportsObserver = 'IntersectionObserver' in window;

  if (reduceMotion || !supportsObserver) {
    return;
  }

  document.documentElement.classList.add('homepage-motion-ready');

  var revealItems = document.querySelectorAll([
    '#homepage #about .about-us',
    '#homepage #about .center.aligned.column',
    '#homepage #what_we_do .column',
    '#homepage #what_is_happening .ui.card',
    '#homepage #carousel_section .slick',
    '#homepage #partners .ui.list .item',
    '#homepage #sponsors .ui.list .item'
  ].join(','));

  revealItems.forEach(function (item, index) {
    item.classList.add('homepage-reveal');
    item.style.setProperty('--reveal-delay', Math.min(index % 6, 5) * 70 + 'ms');
  });

  requestAnimationFrame(function () {
    var donateButton = document.querySelector('#homepage #hero .donate-button');
    if (donateButton) {
      donateButton.classList.add('is-visible');
    }
  });

  var revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.12
  });

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
});
