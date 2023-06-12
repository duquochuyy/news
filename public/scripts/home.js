$(document).ready(() => {
    // SLIDER
    var i = 0;
    const slides = document.getElementsByClassName("my-slide");
    function setSlider() {
        for (let slide of slides)
            slide.style.display = "none";
        if (i === slides.length)
            i = 0;
        slides[i].style.display = "block";
        i++;
        setTimeout(setSlider, 4000);

    }
    setSlider();
    $("#slider .fa-chevron-right").click(() => {
        slides[i-1].style.display = "none";
        i = (i == 3) ? 1 : i + 1;
        slides[i-1].style.display = "block";
    })
    $("#slider .fa-chevron-left").click(() => {
        slides[i-1].style.display = "none";
        i = (i == 1) ? 3 : i - 1;
        slides[i-1].style.display = "block";
    })

})