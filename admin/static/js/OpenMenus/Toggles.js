document.addEventListener('DOMContentLoaded', function() {
    let news_menu = document.getElementById('news_menu');
    let forum_menu = document.getElementById('forum_menu');
    let exhibition_menu = document.getElementById('exhibition_menu');
    let report_menu = document.getElementById('report_menu');

    let news = document.querySelector('.news');
    let forum = document.querySelector('.forum');
    let exhibition = document.querySelector('.exhibition');
    let report = document.querySelector('.report');

    news_menu.addEventListener('click', function() {
        news.classList.toggle('show');
        forum.classList.remove('show');
        exhibition.classList.remove('show');
        report.classList.remove('show');
    })

    forum_menu.addEventListener('click', function() {
        news.classList.remove('show');
        forum.classList.toggle('show');
        exhibition.classList.remove('show');
        report.classList.remove('show');
    })

    exhibition_menu.addEventListener('click', function() {
        news.classList.remove('show');
        forum.classList.remove('show');
        exhibition.classList.toggle('show');
        report.classList.remove('show');
    })

    report_menu.addEventListener('click', function() {
        news.classList.remove('show');
        forum.classList.remove('show');
        exhibition.classList.remove('show');
        report.classList.toggle('show');
    })
});