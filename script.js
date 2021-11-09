let slideIndex = 1;
showSlides(slideIndex);

let plusSlide = function() {
    showSlides(slideIndex += 1);
}

let minusSlide = function() {
    showSlides(slideIndex -= 1);
}
let minusSlideAll = function() {
    showSlides(slideIndex = 1);
}
let slides = $('.item')
let plusSlideAll = function() {
    showSlides(slideIndex = 6);
}


console.log(slides.length)


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = $('.item')
    let dots = $('.slider-dots_item')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



plusSlide()
minusSlide()



$("button").click(function() {
    $(this).addClass("active");
    console.log("Кнопка нажата.");

    var timer = 0;
    makeTimer();

    function makeTimer() {
        clearInterval(timer)
        timer = setInterval(function() {
            slideIndex++;
            showSlides(slideIndex);
        }, 3000);
    }
    $("button").click(function() {
        clearInterval(timer);
    })
})




$("img").click(function() {
    $(this).addClass("activeImg");
    // let r = $('<input/>').attr({
    //     type: "button",
    //     class: "buttonImg",
    //     value: "Уменьшить",
    // });

    // $("body").append(r);
    $("img").click(function() {
        $(".activeImg").removeClass("activeImg");
        // $(".buttonImg").hide(".buttonImg")

    })
})