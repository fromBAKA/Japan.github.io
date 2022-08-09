const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function (){
    menu.classList.toggle('active');
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })
    
})

var slide = new Array("imageSlide/carte-senso.jpg", "imageSlide/img1senso.jpg", "imageSlide/img2senso.jpg", "imageSlide/img3senso.jpg", "imageSlide/img4senso.jpg", "imageSlide/img5senso.jpg", "imageSlide/img6senso.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setInterval("ChangeSlide(1)", 8000);