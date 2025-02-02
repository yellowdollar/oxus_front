document.addEventListener('DOMContentLoaded', function() {
    const hoverForumMenu = document.querySelector('.hover_forum_menu');
    const hoverForumBtn = document.getElementById('hover_forum');

    const mobileForumMenu = document.querySelector('.hover_forum_menu.mobile');
    const mobileForumBtn = document.getElementById('mobile_hover_forum');

    // Показать/скрыть меню на ПК при клике на "Форум"
    hoverForumBtn.addEventListener('click', function() {
        hoverForumMenu.style.display = hoverForumMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Показать/скрыть меню на мобильной версии при клике
    mobileForumBtn.addEventListener('click', function() {
        mobileForumMenu.style.display = mobileForumMenu.style.display === 'block' ? 'none' : 'block';
    });

    fetch('http://147.45.233.158/api/forum/get_forum', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Response Error');
        }
        return response.json();
    })
    .then(data => {
        // Добавляем форумы в десктопное меню
        let hoverForumList = document.querySelector('.hover_forum_menu ul');
        hoverForumList.innerHTML = ''; // Очистить список перед добавлением

        // Добавляем форумы в мобильное меню
        let mobileForumList = document.querySelector('.hover_forum_menu.mobile ul');
        mobileForumList.innerHTML = ''; // Очистить список перед добавлением

        data.forEach(each => {
            let liDesktop = document.createElement('li');
            let aDesktop = document.createElement('a');
            aDesktop.innerText = `Форум ${each.year}`;
            aDesktop.href = `forum.html?${each.id}`;
            aDesktop.addEventListener('click', function() {
                hoverForumMenu.style.display = 'none'; // Закрываем меню после клика
            });

            liDesktop.appendChild(aDesktop);
            hoverForumList.appendChild(liDesktop);

            // Копируем для мобильной версии
            let liMobile = document.createElement('li');
            let aMobile = document.createElement('a');
            aMobile.innerText = `Форум ${each.year}`;
            aMobile.href = `forum.html?${each.id}`;
            aMobile.addEventListener('click', function() {
                mobileForumMenu.style.display = 'none'; // Закрываем меню после клика
            });

            liMobile.appendChild(aMobile);
            mobileForumList.appendChild(liMobile);
        });
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    });
});
