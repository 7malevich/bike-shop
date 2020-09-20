$(function () {
  $(".baner-slider").slick({
    //  infinite: true,
    //  speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow:
      '<button class="baner-slider__arows baner-slider__arows--left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="black"/></svg></button>',
    prevArrow:
      '<button class="baner-slider__arows baner-slider__arows--right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="black"/></svg></button>',
  });

  $(".js-products-slider").slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: true,
    infinite: false,
    nextArrow:
      '<button class="products-slider__arrows--right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="black"/></svg></button>',
    prevArrow:
      '<button class="products-slider__arrows--left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="black"/></svg></button>',
  });
});
