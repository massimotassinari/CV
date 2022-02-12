

//funcion que me desplega el menu bar

function action(){
    console.log('hola');
    var ancla = document.getElementsByClassName('nav-enlace');
    for(var i=0;i<ancla.length;i++){
        ancla[i].classList.toggle('desaparecer');
    }
}

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function mostrarSkills(){
    Skillspart.innerHTML += `
    <h1>Python</h1>
    <progress id="file" max="100" value="70"> 10% </progress>
    <label for="file"> 70%</label>

    

    <h1>Java</h1>
    <progress id="file" max="100" value="60"> 10% </progress>
    <label for="file"> 60%</label>

    <h1>HTML</h1>
    <progress id="file" max="100" value="15"> 10% </progress>
    <label for="file"> 15%</label>

    <h1>JavaScript</h1>
    <progress id="file" max="100" value="15"> 10% </progress>
    <label for="file"> 15%</label>

    <h1>Git</h1>
    <progress id="file" max="100" value="50"> 10% </progress>
    <label for="file"> 50%</label>

    <h1>CSS</h1>
    <progress id="file" max="100" value="20"> 10% </progress>
    <label for="file"> 20%</label>

    `;
}

