
(function ($) {
    $(document).ready(function () {
        var swiper
        swiper = new Swiper(".swiper-container", {
            freeMode: false,
            direction: "horizontal",
            loop: false,
            keyboard: true,
            mousewheel: false,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
            hashNavigation: {
            },
            preventClicks: false,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                hide: false,
                snapOnRelease: true
            },
            on: {
                slideChange: function () {
                    if (!swiper)
                        return
                    $(".icons .fa-chevron-circle-left").show()
                    $(".icons .fa-chevron-circle-right").show()
                    console.log(swiper, this)
                    if (swiper.activeIndex === 0)
                        $(".icons .fa-chevron-circle-left").hide()
                    else if (swiper.activeIndex === 3)
                        $(".icons .fa-chevron-circle-right").hide()
                }
            }
        })
        $(".icons .fa-chevron-circle-left").click(function (ev) {
            ev.preventDefault()
            swiper.slidePrev()
        })
        $(".icons .fa-chevron-circle-right").click(function (ev) {
            ev.preventDefault()
            swiper.slideNext()
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
            if (idx >= 0)
                swiper.slideTo(idx, 500, true)
        })
        if (location.hash !== "") {
            var id = location.hash.slice(1)
            $("li.select-button").removeClass("active")
            $("li.select-button > a[href='#" + id + "']").parent().addClass("active")
        }

        $("*[data-syntax]").each(function () {
            var language = $(this).data("syntax")
            var syntax = new Syntax({
                language: language,
                cssPrefix: "syntax-"
            })
            syntax.config({})
            var text = $(this).text()
            text = text
                .replace(/^(?:[ \t]*\r?\n)+/, "")
                .replace(/([ \t]*\r?\n)(?:[ \t]*\r?\n)*[ \t]*$/, "$1")
            syntax.richtext(text)
            var html = syntax.html()
            $(this).html(html)
            $(".syntax-anchor", this).each(function () {
                var m = $(this).attr("class").match(/syntax-anchor-(\S+)/)
                var num = m[1]
                $(this).addClass("cn-" + num + "-i")
            })
            $(this).addClass("syntax")
        })
    })
})(jQuery)

