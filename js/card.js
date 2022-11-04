let splides = document.querySelectorAll(".card_img_slider");
if (splides.length) {
    let splideOptions = {
        perPage: 1,
        perMove: 1,
        arrows: false,
        autoplay: true,
        lazyLoad: "nearby",
        resetProgress: true,
    };
    for (let i = 0; i < splides.length; i++) {
        let splideElement = splides[i];
        let splide = new Splide(splideElement, splideOptions);
        splide.mount();
    }
}
[...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
            .forEach(el => new bootstrap.Tooltip(el))