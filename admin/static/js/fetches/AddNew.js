let add_news_button = document.getElementById('add_news_button');

add_news_button.addEventListener('click', function() {
    let add_new_title = document.getElementById('add_new_title').value;
    let add_new_text = document.querySelector('.ql-editor');
    let token = getCookie('token');

    let formData = new FormData();

    // Добавление данных в formData
    formData.append('title', add_new_title);
    formData.append('text', add_new_text.innerHTML);

    // Используем глобальный массив allFiles
    if (window.allFiles.length === 0) {
        console.error('No files selected!');
        return; // Остановка, если нет файлов
    }

    // Добавляем все файлы из массива allFiles
    for (let i = 0; i < window.allFiles.length; i++) {
        formData.append('photo_files', window.allFiles[i]);
    }

    formData.append('token', token);

    // Отправка данных через fetch
    fetch('http://127.0.0.1:8000/news/add_new', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(errorText => {
                throw new Error(errorText);
            });
        }
        return response.json();  // Ожидаем JSON ответ
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    });
});

function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}
