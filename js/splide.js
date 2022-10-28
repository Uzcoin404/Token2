new Splide( '.products__slider', {
    perPage: 4,
    gap: '10px',
    pagination: false,
}).mount();

new Splide( '.slider', {
    perPage: 1,
    perMove: 1,
    gap: '3rem',
    heightRatio: 0.25,
}).mount();

new Splide( '.card_img_slider', {
    perPage: 1,
    perMove: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: 'nearby'
}).mount();