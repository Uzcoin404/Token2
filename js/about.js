$(document).ready(function () {
    $(".about_stats_title").counterUp({
        delay: 10,
        time: 1500,
        triggerOnce: true,
    });
});
new Splide(".about__slider", {
    perPage: 1,
    perMove: 1,
    gap: "3rem",
    arrows: false,
}).mount();
