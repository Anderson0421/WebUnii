
ScrollReveal().reveal('.about__img', { delay: 50,easing:'cubic-bezier(0.5, 0, 0, 1)',mobile: true,duration:2400, origin:'right',distance:'-100px' });
ScrollReveal().reveal('.about__data', { delay: 100,duration:3000, origin:'bottom',distance:'-150px' });
ScrollReveal().reveal('.about__heading', { delay: 120,duration:2000, origin:'bottom',distance:'-200px'  });
ScrollReveal().reveal('.about__description', { delay: 150,duration:2500, origin:'bottom',distance:'-250px' });

ScrollReveal().reveal('.Title', { delay: 90,duration:2000, origin:'top',distance:'-150px' });
ScrollReveal().reveal('.grid', { delay: 150,duration:2500, origin:'bottom',distance:'-250px' });

function toggleDiv() {
    var div = document.getElementById("miDiv");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
  