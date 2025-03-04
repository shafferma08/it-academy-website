var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* Graph Script */
const ctx = document.getElementById('salaryChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Network Engineer',
                'IT Security Specialist',
                'IT Systems Administrator',
                'Computer Systems Technician',
                'Data Analyst',
                'Systems Analyst',
                'Database Manager'
            ],
            datasets: [{
                label: 'Average Salary ($)',
                data: [101035, 93512, 80000, 82865, 79113, 75383, 70833], // Salary Data
                backgroundColor: [
                    '#008142', '#ffcf01', '#008142', '#ffcf01', '#008142', '#ffcf01', '#008142'
                ],
                borderColor: '#333',
                borderWidth: 1,
                borderRadius: 5, // Adds rounded corners to bars
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bar chart
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: '#333',
                        font: { size: 14 }
                    }
                },
                y: {
                    ticks: {
                        color: '#333',
                        font: { size: 14 }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


   /* Video and picture slideshow */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Ensure the slide index stays within bounds
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and add "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}





/* mobile / tablet slideshow */



