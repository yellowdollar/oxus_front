let news_table = document.querySelector('.news_table');
let add_news = document.querySelector('.add_news');

let add_news_button = document.getElementById('add_news_button');
let all_news_button = document.getElementById('all_news_button');

all_news_button.addEventListener('click', function() {
    news_table.classList.toggle('show');
    add_news.classList.remove('show');
})

add_news_button.addEventListener('click', function() {
    news_table.classList.remove('show');
    add_news.classList.toggle('show');
})