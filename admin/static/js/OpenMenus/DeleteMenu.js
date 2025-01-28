let delete_button = document.getElementById('delete_button');
let delete_menu_news = document.querySelector('.delete_news');
let delete_menu = document.querySelector('.delete_menu');

delete_button.addEventListener('click', function() {
    delete_menu_news.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!delete_menu.contains(event.target) && !delete_button.contains(event.target)) {
        delete_menu_news.classList.remove('show');
    }
});
