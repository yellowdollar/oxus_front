let add_new_open = document.getElementById('add_new_open');
let add_new_menu = document.querySelector('.add_new_menu');
let menu = document.querySelector('.add_new_menu .menu');

add_new_open.addEventListener('click', function(event) {
    event.stopPropagation(); 
    add_new_menu.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !add_new_open.contains(event.target)) {
        add_new_menu.classList.remove('show');

        let inputs = add_new_menu.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.type !== 'submit') {
                input.value = '';
            }
        });
    }
});
