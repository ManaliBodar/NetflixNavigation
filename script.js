// bring open,close  button and nav
const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav')

// add event listener on open button

open_btn.addEventListener('click' ,() =>{
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

// add  event listener on close button
close_btn.addEventListener('click',()=>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})