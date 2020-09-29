const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
    
}

const pencilSlide = () => {
    const pencil = document.querySelector('.pencil');

    pencil.addEventListener('onmouseover', () => {
        pencil.classList.toggle('.pencil active');
    });
}

function splitScroll(){
    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
      duration: '300%',
      triggerElement: '.page-detail-2',
      triggerHook: 0
    })
    .setPin('.portfolio-2')
    .addTo(controller);
  }
  
splitScroll();

pencilSlide();

navSlide();