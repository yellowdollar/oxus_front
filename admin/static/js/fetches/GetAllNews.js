document.addEventListener('DOMContentLoaded', function() {
    fetch('http://147.45.233.158/news/get_all_news', {
        method: 'GET'
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error response: ', response.text);
        }

        return response.json();
    })
    .then(data => {
        let all_news_div = document.querySelector('.all_news table tbody');
        all_news_div.innerHTML = '';

        data.forEach(each => {
            let row = document.createElement('tr');

            let id_col = document.createElement('td');
            id_col.innerText = each.id;
            row.appendChild(id_col);

            let title_col = document.createElement('td');
            title_col.innerText = each.title;
            row.appendChild(title_col);

            let text_col = document.createElement('td');
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = each.text; // Присваиваем HTML в div
            let plainText = tempDiv.textContent || tempDiv.innerText; // Получаем только текст без тегов
            text_col.innerText = plainText.length > 30 ? plainText.slice(0, 30) + '...' : plainText;
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
    })

});