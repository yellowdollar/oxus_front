document.addEventListener('DOMContentLoaded', function() {
    const hoverForumMenu = document.querySelector('.hover_forum_menu');
    const hoverForumBtn = document.getElementById('hover_forum');

    // Показать/скрыть меню при клике на "Форум"
    hoverForumBtn.addEventListener('click', function() {
        hoverForumMenu.style.display = hoverForumMenu.style.display === 'block' ? 'none' : 'block';
    });

    fetch('http://10.251.4.137/api/forum/get_forum', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Response Error');
        }
        return response.json();
    })
    .then(data => {
        let hoverForumList = document.querySelector('.hover_forum_menu ul');

        hoverForumList.innerHTML = ''; // Очистить список перед добавлением новых элементов

        data.forEach(each => {
            let li = document.createElement('li');
            let a_href = document.createElement('a');
            a_href.innerText = `Форум ${each.year}`;
            a_href.href = `forum.html?${each.id}`;
            
            // Добавляем обработчик события для перехода
            a_href.addEventListener('click', function(event) {
                // Закрываем меню после клика
                hoverForumMenu.style.display = 'none';
            });

            li.appendChild(a_href);
            hoverForumList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    });
});
