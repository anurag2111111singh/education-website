// change the navbar style on scroll


window.addEventListener('scroll' , ()=>{
    document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 0)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener("click" , () =>{
        faq.classList.toggle('open')

        //change incon

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"
        }
    })
})
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        600: {
            slidesPerView: 2
        }
      }
});

// show hide nav menus

const menu = document.querySelector(".nav__menu");
const openbtn = document.querySelector("#opne-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

openbtn.addEventListener('click' , ()=>{
    menu.style.display = "flex";
    closebtn.style.display = "inline-block"
    openbtn.style.display = "none"
})

// close nav bar
const closeNav = () =>{
    menu.style.display = "none";
    closebtn.style.display = "none"
    openbtn.style.display = "block";
}
closebtn.addEventListener('click' , closeNav)