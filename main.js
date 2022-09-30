const search_icon = document.querySelector('.fa-solid');
const search_input = document.querySelector('.search_input');
const header = document.querySelector('header');
const pop_up = document.querySelector('.pop_up');
const popUp_hidden = document.getElementById('popUp_hidden');
const header_login_btn = document.querySelector('.header_login_btn');


search_icon.addEventListener("click", () => {
    search_input.classList.toggle("active");
});


// scroll header 
window.addEventListener("scroll",() => {
    if(scrollY > 100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})


// pop up show js code 
header_login_btn.addEventListener('click', () => {
    pop_up.classList.add('active');
})



// pop up hidden js
 popUp_hidden.addEventListener('click', () => {
    pop_up.classList.remove('active');
 })