var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}



var slideNo = 1;
showSlides(slideNo);

function slideChange(n) {
  showSlides(slideNo += n);
}

function currentSlide(n) {
  showSlides(slideNo = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-mc");
  
  if (n > slides.length) {slideNo = 1}    
  if (n < 1) {slideNo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 
  slides[slideNo-1].style.display = "block";  
}

