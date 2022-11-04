document.addEventListener("DOMContentLoaded", function () {
    let main = new Splide("#main-carousel", {
        rewind: true,
        pagination: false,
    });
    let thumbnails = new Splide("#thumbnail-carousel", {
        fixedWidth: 100,
        gap: 10,
        arrows: false,
        isNavigation: true,
        rewind: true,
        pagination: false,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});
const stickyElm = document.querySelector(".product_about_header");
console.log(stickyElm);

const observer = new IntersectionObserver(
    ([e]) => {
        e.target.classList.toggle("active", e.intersectionRatio < 1);
    },
    { threshold: [1] }
);

observer.observe(stickyElm);
