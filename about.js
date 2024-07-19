// change the navbar style on scroll


window.addEventListener('scroll' , ()=>{
    document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 0)
})

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