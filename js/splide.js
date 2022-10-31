new Splide(".products__slider", {
    perPage: 4,
    gap: "10px",
    pagination: false,
}).mount();

new Splide(".banner__slider", {
    autoplay: true,
    perPage: 1,
    perMove: 1,
    gap: "3rem",
    heightRatio: 0.25,
    resetProgress: true,
}).mount();
