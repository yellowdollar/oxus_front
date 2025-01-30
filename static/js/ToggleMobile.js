let mobile_hamburger = document.querySelector('.mobile-hamburger');
let mobile_menu = document.querySelector('.mobile_menu');

let exit = document.querySelector('.exit');

mobile_hamburger.addEventListener('click', function() {
    mobile_menu.classList.toggle('show');
})

exit.addEventListener('click', function() {
    mobile_menu.classList.remove('show');
})