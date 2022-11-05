var a = 0;
$(window).scroll(function () {
    var oTop = $(".about__stats").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".about_stats_title").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },

                {
                    duration: 1500,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    },
                }
            );
        });
        a = 1;
    }
});
new Splide(".about__slider", {
    perPage: 1,
    perMove: 1,
    gap: "3rem",
    arrows: false,
}).mount();
