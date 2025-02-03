document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile JS загружен');

    const mobileForumMenu = document.querySelector('.hover_forum_menu.mobile');
    const mobileForumBtn = document.getElementById('mobile_hover_forum');

    if (!mobileForumMenu || !mobileForumBtn) {
        console.error('❌ Элементы мобильного меню не найдены.');
        return;
    }

    // Показываем/скрываем меню при клике
    mobileForumBtn.addEventListener('click', function(event) {
        console.log('✅ Клик по кнопке форума');
        event.stopPropagation(); // Останавливаем всплытие события
        mobileForumMenu.classList.toggle('active');
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function(event) {
        if (!mobileForumMenu.contains(event.target) && event.target !== mobileForumBtn) {
            console.log('❌ Клик вне меню, закрываем');
            mobileForumMenu.classList.remove('active');
        }
    });

    // Загрузка форумов
    fetch('https://147.45.233.158/api/forum/get_forum', { method: 'GET' })
        .then(response => {
            if (!response.ok) throw new Error('Ошибка ответа сервера');
            return response.json();
        })
        .then(data => {
            console.log('📥 Данные загружены:', data);
            let mobileForumList = mobileForumMenu.querySelector('ul');

            if (!mobileForumList) {
                console.error('❌ Список ul не найден.');
                return;
            }

            mobileForumList.innerHTML = ''; // Очищаем список

            data.forEach(each => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.innerText = `Форум ${each.year}`;
                a.href = `forum.html?${each.id}`;
                a.addEventListener('click', function() {
                    console.log(`🔗 Переход в ${a.href}`);
                    mobileForumMenu.classList.remove('active');
                });

                li.appendChild(a);
                mobileForumList.appendChild(li);
            });

            console.log('✅ Форумы добавлены');
        })
        .catch(error => {
            console.error('❌ Ошибка загрузки форумов:', error.message);
        });
});
