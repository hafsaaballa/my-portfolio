const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu i');
const navbar = document.querySelector('.navbar')

const navberLink = document.querySelectorAll('nav a');

navberLink.onclick = function (){
    navberLink.classList.toggle('activeLink')
}


menu.onclick = function(){
   navbar.classList.toggle('active')
   menuIcon.classList.toggle('fa-xmark')
}


window.onscroll = ()=>{
    navbar.classList.remove('active')
    menuIcon.classList.remove('fa-xmark')

}



