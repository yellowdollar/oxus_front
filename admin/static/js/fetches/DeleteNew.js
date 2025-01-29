let news_id_delete_button = document.getElementById('news_id_delete_button');

news_id_delete_button.addEventListener('click', function() {
    let news_id_delete = document.getElementById('news_id_delete').value;

    let formData = new FormData();

    let token = getCookie('token');

    formData.append('token', token);
    formData.append('id', news_id_delete);

    fetch('http://10.251.4.137/api/news/delete_new', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Response Error: ', response.text)
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
        let delete_menu_news = document.querySelector('.delete_news');
        delete_menu_news.classList.remove('show');

        updateNewsTable();
    })
    .catch(error => {
        console.error('Error message: ', error.message);
    })
})

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

function updateNewsTable() {
    fetch('http://10.251.4.137/api/news/get_all_news', {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error response: ', response.text);
        }

        return response.json();
    })
    .then(data => {
        let all_news_div = document.querySelector('.all_news table tbody');
        all_news_div.innerHTML = ''; // Очистить текущие строки в таблице

        data.forEach(each => {
            let row = document.createElement('tr');

            let id_col = document.createElement('td');
            id_col.innerText = each.id;
            row.appendChild(id_col);

            let title_col = document.createElement('td');
            title_col.innerText = each.title;
            row.appendChild(title_col);

            let text_col = document.createElement('td');
            text_col.innerText = each.text.length > 30 ? each.text.slice(0, 30) + '...' : each.text;
            row.appendChild(text_col);

            let date_col = document.createElement('td');
            date_col.innerText = each.date;
            row.appendChild(date_col);

            let show_photos = document.createElement('td');
            let input = document.createElement('input');
            input.value = "Просмотреть Фото";
            input.type = "submit";
            show_photos.appendChild(input);
            row.appendChild(show_photos);

            all_news_div.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    });
}
