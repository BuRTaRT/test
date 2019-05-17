$("document").ready(function () {

    // dropped native bootsrtap carousel interval to 0 (inactive), and called carousels method "next" permanently in inteval from 1000
    // to 5000 milliseconds

    $(".carousel").carousel({
        interval: 0
    });
    let timer = setTimeout(function f() {
        clearTimeout(timer);
        $(".carousel").carousel("next");
        let n = Math.floor(Math.random() * (5000 - 1000)) + 1000;
        timer = setTimeout(f, n);
    }, Math.floor(Math.random() * (5000 - 1000)) + 1000);


    let target = $(".about-us__skills");
    let targetPos = target.offset().top;
    let winHeight = $(window).height();
    let scrollToElem = targetPos - winHeight;
    let counter=0;
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem && counter <1) {
            counter++;
            function move() {
                var elem = document.querySelector(".progress-bar");
                var width = 1;
                var id = setInterval(frame, 10);

                function frame() {
                    if (width >= 79) {
                        clearInterval(id);
                    } else {
                        width++;
                        elem.style.width = width + '%';
                    }
                }

                frame();
            }

            move();
        }
    });
})