let hamburger=document.querySelector('.hamburger');
// let navin=document.querySelector('.nav-in');
// let navcc=document.getElementById('#navcc');
// let navout=document.querySelector('.nav-open');
let navtoggle=document.querySelector('.nav-toggle');
let navbar=document.querySelector('.navbar');
let navcc=document.querySelector('.navcc');
let navul=document.querySelector('.nav-ul');
let rightnav=document.querySelector('.right-nav');

hamburger.addEventListener('click',()=>{
    navcc.classList.toggle('h-nav');
    navbar.classList.toggle('h-nav');
    navul.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
    hamburger.classList.toggle('nav-toggle');

})