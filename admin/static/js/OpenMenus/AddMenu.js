let add_new_open = document.getElementById('add_new_open');
let add_new_menu = document.querySelector('.add_new_menu');

add_new_open.addEventListener('click', function() {
    add_new_menu.classList.toggle('show');
})