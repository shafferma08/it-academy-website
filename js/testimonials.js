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


document.addEventListener("DOMContentLoaded", function () {
  // Detect screen size and only run slider if mobile/tablet
  function isMobileOrTablet() {
      return window.innerWidth < 1024;
  }

  if (isMobileOrTablet()) {
      const slides = document.querySelectorAll(".auto-slider .slide");
      let currentIndex = 0;

      function showSlide(index) {
          slides.forEach(slide => slide.classList.remove("active"));
          slides[index].classList.add("active");
      }

      function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
      }

      // Auto slide every 3 seconds
      setInterval(nextSlide, 3000);
  }
});