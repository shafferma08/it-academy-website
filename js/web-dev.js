var accordTop = document.getElementsByClassName("accordion-top");
var accordBottom = document.getElementsByClassName("accordion-bottom");

function playAccordion(event) {
    for (var i = 0; i < accordBottom.length; i++) {
        if (event.target === accordTop[i]) {
            if (accordBottom[i].style.maxHeight && accordBottom[i].style.maxHeight !== "0px") {
                // If it's open, close it
                accordBottom[i].style.maxHeight = "0px";
            } else {
                // Open it (without closing others)
                accordBottom[i].style.maxHeight = accordBottom[i].scrollHeight + "px";
            }
        }
    }
}

// Attach event listeners to each accordion
for (var i = 0; i < accordTop.length; i++) {
    accordTop[i].addEventListener("click", playAccordion, false);
}
