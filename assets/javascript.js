// On-scroll animation functionality
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
});

const hiddenElement1 = document.querySelectorAll('.hidden1');
const hiddenElement2 = document.querySelectorAll('.hidden2');
hiddenElement1.forEach((el) => observer.observe(el));
hiddenElement2.forEach((el) => observer.observe(el));


// Navigation bar scroll functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToInterests() {
  window.scrollTo({
    top: 900,
    behavior: 'smooth'
  });
}

function scrollToProjects() {
  window.scrollTo({
    top: 1150,
    behavior: 'smooth'
  });
}

function scrollToAchievements() {
  window.scrollTo({
    top: 2000,
    behavior: 'smooth'
  });
}

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; }