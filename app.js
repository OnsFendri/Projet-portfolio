
/* SLIDER */
let img_Slider = document.getElementsByClassName('img_Slider');
let etape = 0;
let nbr__img = img_Slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');



function enleverActiveImages() {
    for (let i = 0; i < nbr__img; i++) {
        img_Slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img_Slider[etape].classList.add('active');
})

precedent.addEventListener('click', function () {
    etape--;
    if (etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img_Slider[etape].classList.add('active');
})

setInterval(function () {
    etape++;
    if (etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img_Slider[etape].classList.add('active');
}, 5000)


/* SCROLL UP */

jQuery(function () {
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right', '10px'); // Replace à 10pixels de la droite l'image
            } else {
                $('#scrollUp').removeAttr('style'); // Enlève les attributs CSS affectés par javascript pour cacher 
            }
        });
    });
});


/* BARRE DE NAVIGATION RESPONSIVE */

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav_link');
navLink.classList.toggle('hide');
hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
})
