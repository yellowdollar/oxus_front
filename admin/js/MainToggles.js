let news_toggles = document.getElementById('news');
let news_menus = document.getElementById('news_menus');

let partners_menus = document.getElementById('partners_menus');
let partners = document.querySelector('.partners');

let exibition_menus = document.getElementById('exibition_menus');
let exibition = document.querySelector('.exibition');

let stats_menus = document.getElementById('stats_menus');
let stats = document.querySelector('.stats');

news_menus.addEventListener('click', function() {
    news_toggles.classList.toggle('show');
    partners.classList.remove('show');
    exibition.classList.remove('show');
    stats.classList.remove('show');
});

partners_menus.addEventListener('click', function() {
    news_toggles.classList.remove('show');
    partners.classList.toggle('show');
    exibition.classList.remove('show');
    stats.classList.remove('show');
});

exibition_menus.addEventListener('click', function() {
    news_toggles.classList.remove('show');
    partners.classList.remove('show');
    exibition.classList.toggle('show');
    stats.classList.remove('show');
});

stats_menus.addEventListener('click', function() {
    news_toggles.classList.remove('show');
    partners.classList.remove('show');
    exibition.classList.remove('show');
    stats.classList.toggle('show');
});