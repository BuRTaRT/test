$(document).ready(function () {
    // code in function just makes scroll to elems in page smooth.function takes array from id's of menus(had two)
    // one for mob, second for desktop

    function smoothScrollAttach(array) {
        for (let key of array) {
            $(key).on("click", "a", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                if (top != "" || top != "#") {
                    $('body,html').animate({scrollTop: top}, 800);
                }
            });
        }
    }

    smoothScrollAttach(["#nav-bar", "#mob-menu"]);

    // changing burger/close class and makes mob menu appear/disapeare

    $(".burger").on("click", function (e) {
        $(".burger").toggleClass("fa-bars fa-times");
        $(".mob-menu").toggleClass("d-block")
    })

    //  drops native bootstrap carousel interval to 0, and makes each 1-5 seconds carousel slide

    $(".carousel").carousel({
        interval: 0
    });
    let timer = setTimeout(function f() {
        clearTimeout(timer);
        $(".carousel").carousel("next");
        let n = Math.floor(Math.random() * (5000 - 1000)) + 1000;
        timer = setTimeout(f, n);
    }, Math.floor(Math.random() * (5000 - 1000)) + 1000);
})

// filling skill bars  in about us section and highlights "contacts" in nav
let scrollToElem = $(".about-us__skills").offset().top - $(window).height();
let counter = 0;
let contactLink =document.getElementById("contact-link")
$(window).scroll(function () {
if(contactLink.classList.contains("active")){
contactLink.classList.add("highlight")
}
else if(contactLink.classList.contains("highlight")){
    contactLink.classList.remove("highlight")
}


    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem && counter < 1) {
        counter++;

        function fill(arr) {
            for (let i = 0; i < arr.length; i++) {
                let width = 0;
                let timer = setInterval(function () {
                    if (width >= arr[i].dataset.value) {
                        clearInterval(timer);
                    } else {
                        width++;
                        arr[i].style.width = width + "%"
                    }
                }, 10);
            }
        }

        fill($(".progress-bar"))
    }
})

// ckeking form elems before submit
$(".get-in-touch__btn").on("click", function (e) {
    let arr = document.querySelectorAll(".checkBeforeSubmit");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value == "") {
            e.preventDefault()
            alert("Please fill all of the fields");
            break;
        }
    }

})