var accordTop = document.getElementsByClassName("accordion-top");
var accordBottom = document.getElementsByClassName("accordion-bottom");



function playAccordion (event) {
    for (var i = 0; i < accordBottom.length; i++) {
        if (accordBottom[i].classList.contains("accordion-closed") && event.target == accordTop[i]) {
            accordBottom[i].classList.add("accordion-open");
            accordBottom[i].classList.remove("accordion-closed");
        } else if (accordBottom[i].classList.contains("accordion-open") && event.target == accordTop[i]) {
            accordBottom[i].classList.add("accordion-closed");
            accordBottom[i].classList.remove("accordion-open");
        }
    }
}

for (var i = 0; i < accordBottom.length; i++) {
    accordTop[i].addEventListener("click", playAccordion, false);
}