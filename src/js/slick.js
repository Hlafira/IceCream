$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
  arrows: false,
});

$('.gallery-photo-container').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
