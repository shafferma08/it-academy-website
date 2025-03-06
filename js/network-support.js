var accordTop = document.getElementsByClassName("accordion-top");
var accordBottom = document.getElementsByClassName("accordion-bottom");

function playAccordion(event) {
    for (var i = 0; i < accordBottom.length; i++) {
        if (event.target === accordTop[i]) {
            if (accordBottom[i].style.maxHeight && accordBottom[i].style.maxHeight !== "0px") {
                // If it's open, close it
                accordBottom[i].style.maxHeight = "0px";
            } else {
                // Close all accordions first
                for (var j = 0; j < accordBottom.length; j++) {
                    accordBottom[j].style.maxHeight = "0px";
                }
                // Then open the clicked one
                accordBottom[i].style.maxHeight = accordBottom[i].scrollHeight + "px";
            }
        }
    }
}

// Attach event listeners to each accordion
for (var i = 0; i < accordTop.length; i++) {
    accordTop[i].addEventListener("click", playAccordion, false);
}
