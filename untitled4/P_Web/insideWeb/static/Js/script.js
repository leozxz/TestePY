alert("Site em construção!")

$(function(){

    function atualizarInfo(){
        $("#film-name").text( $(".slick-center").data("name") );
    }

    $(".film_img").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),
    });
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();