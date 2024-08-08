document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  
  const imageElement2 = document.getElementById("image-to-replace-2")

  const imageElement = document.getElementById("image-to-replace");
  if (!imageElement) {
    console.error("Element not found");
    return;
  }

  const newImageSrc = "assets/images/self-photo-burnt.png"; // Image to replace with

  imageElement2.addEventListener("mouseover", function() {
    // Change the image source on hover
    imageElement.src = newImageSrc;

    // Optional: Remove event listener after first hover
    imageElement.removeEventListener("mouseover", arguments.callee);
  });
});


function scrollToCoordinate() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

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