const burger = document.querySelector('.menu');
const burgerIcon = document.querySelector('.menu i');
const navber = document.querySelector('.navbar')

const navberLink = document.querySelectorAll('nav a');

navberLink.onclick = function (){
    navberLink.classList.toggle('activeLink')
}


burger.onclick = function(){
   navber.classList.toggle('active')
   burgerIcon.classList.toggle('fa-xmark')
}


window.onscroll = ()=>{
    navber.classList.remove('active')
    burgerIcon.classList.remove('fa-xmark')

}



