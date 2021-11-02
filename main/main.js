
  // Créer le mode sombre
var dark = document.getElementsByClassName('boutonsombre')[0];
var light = document.getElementsByClassName('boutonclaire')[0];
var themecolor = document.getElementsByTagName('body')[0];
var footercolor = document.getElementsByTagName('footer')[0];
dark.addEventListener('click', function(){
    themecolor.classList.add("theme");
    footercolor.classList.remove("theme");
})
light.addEventListener('click', function(){
    themecolor.classList.remove("theme");
})

  // Creer le slides des projets

var slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}     
    