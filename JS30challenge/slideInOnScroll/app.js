function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

let sliderImgs = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    sliderImgs.forEach(sliderimg => {
        let slideInAt = (window.scrollY + window.innerHeight);

        let sliderBottom = sliderimg.offsetTop + sliderimg.height;
        let isHalfShown = slideInAt > (sliderimg.offsetTop + sliderimg.height / 2);
        let isNotScrolledPast = window.scrollY < sliderBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderimg.classList.add("active");
        } else {
            sliderimg.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));