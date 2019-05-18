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


    let counter = 0;
    let scrollToElem = $(".about-us__skills").offset().top - $(window).height();
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem && counter < 1) {

            function move() {
                var elem = document.querySelector(".progress-bar");
                var width = 0;
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

function fill(arr) {
    for (let key in arr) {
        let width = 0;
        console.log(arr[key]);
        let timer = setInterval(function () {
            if (width >= arr[key].dataset.value) {
                clearInterval(timer);
            } else {
                width++;
                arr[key].style.width = width + "%"
            }
        }, 10);
    }
}

fill(document.querySelectorAll(".progress-bar"))

document.querySelector(".get-in-touch__btn").onclick = function (e) {

    let arr = $(".form-elem")
    for (let i = 0; i < arr.length; i++) {
        console.log(arr.eq(i))
    }
}