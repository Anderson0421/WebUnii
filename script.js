const body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".searchToggle"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        siderbarClose = document.querySelector(".siderbarClose");

    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }

// js code to toggle dark and light mode
        modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
        });



body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


'use strict';




/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}






/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);
/**
 * FORMULARIO 
 */

/**const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= +51941166905;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}, Asunto:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)
/**
 * PARALLAX EFFECT
 */


const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});

// EVENTO PARA CAMBIAR EL BACKGROUND

window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  var section2 = document.querySelector(".section2");

  var section2Offset = section2.offsetTop;

  if (window.pageYOffset >= section2Offset) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
ScrollReveal().reveal('.headline');




/*===== SWIPER =====*/

document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 30,
    efect:"fade",
    autoplay: {
      delay: 3000, // Tiempo de transición entre slides en milisegundos
      disableOnInteraction: false, // Permite la interacción del usuario con el swiper mientras se está reproduciendo automáticamente
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      var filterValue = button.dataset.filter;

      swiper.slides.forEach(function(slide) {
        slide.style.display = "block";

        if (filterValue !== "all" && !slide.classList.contains(filterValue)) {
          slide.style.display = "none";
        }
      });

      swiper.update();
    });
  });
});


const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remover la clase activa de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Agregar la clase activa al botón actual
    button.classList.add('active');
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var figures = document.querySelectorAll(".cs-style-4 figure");

  figures.forEach(function(figure) {
      figure.addEventListener("mouseenter", function() {
          this.classList.add("hovered");
      });
    
      figure.addEventListener("mouseleave", function() {
          this.classList.remove("hovered");
      });
  });
});

