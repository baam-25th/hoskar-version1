var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    disableOnInteraction: false,
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    breakpoint: {
        562: {
            spaceBetween: 31,
        },
    },
});

//
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName(" slide-image ");
    var dots = document.getElementsByClassName("demo ");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none ";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white ", " ");
    }
    x[slideIndex - 1].style.display = "flex ";
    dots[slideIndex - 1].className += " w3-white ";
}