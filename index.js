
(function ($) {
    $(document).ready(function () {
        var swiper = $(".swiper-container").swiper({
            direction:           "horizontal",
            loop:                false,
            effect:              "slide",
            pagination:          ".swiper-pagination",
            prevButton:          ".icons .fa-chevron-circle-left",
            nextButton:          ".icons .fa-chevron-circle-right",
            scrollbar:           ".swiper-scrollbar",
            simulateTouch:       true,
            noSwiping:           true,
            noSwipingClass:      "swiper-no-swiping",
            keyboardControl:     true,
            mousewheelControl:   false,
            paginationClickable: true,
            hashnav:             true
        })
        $(window).on("hashchange", function () {
            var id = location.hash.slice(1)
            $("li.select-button").removeClass("active")
            $("li.select-button > a[href='#" + id + "']").parent().addClass("active")
            var slides = []
            $(".swiper-slide[data-hash]").each(function () {
                slides.push($(this).attr("data-hash"))
            })
            var idx = slides.indexOf(id)
            console.log(id, slides, idx)
            if (idx >= 0)
                swiper.slideTo(idx, 500, true)
        })
        if (location.hash !== "") {
            var id = location.hash.slice(1)
            $("li.select-button").removeClass("active")
            $("li.select-button > a[href='#" + id + "']").parent().addClass("active")
        }
    })
})(jQuery)

