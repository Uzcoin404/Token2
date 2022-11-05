new Splide(".products__slider", {
    perPage: 4,
    gap: "10px",
    pagination: false,
    breakpoints: {
        1200: {
            perPage: 3,
        },
        992: {
            perPage: 2,
        },
        550: {
            perPage: 1,
        },
    },
    rewind: true,
}).mount();

new Splide(".banner__slider", {
    type: "loop",
    autoplay: true,
    perPage: 1,
    perMove: 1,
    gap: "3rem",
    resetProgress: true,
}).mount();
