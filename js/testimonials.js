/* Testimonials Slideshow */

let quoteSlideIndex = 1;
document.addEventListener("DOMContentLoaded", () => showQuoteSlides(quoteSlideIndex)); // Ensure the first slide loads

function plusQuoteSlides(n) {
  showQuoteSlides(quoteSlideIndex += n);
}

function currentQuoteSlide(n) {
  showQuoteSlides(quoteSlideIndex = n);
}

function showQuoteSlides(n) {
  let i;
  let slides = document.getElementsByClassName("quote-slide");
  let dots = document.getElementsByClassName("quote-dot");

  if (slides.length === 0) return; // Ensure there are slides

  if (n > slides.length) {
    quoteSlideIndex = 1;
  }
  if (n < 1) {
    quoteSlideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[quoteSlideIndex - 1].style.display = "block";
  dots[quoteSlideIndex - 1].className += " active";
}
