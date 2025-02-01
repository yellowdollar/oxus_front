let all_news_block = document.querySelector('.all_news .items');

document.addEventListener('DOMContentLoaded', function() {
    
    let one_new = document.querySelector('.news_content');
    one_new.innerHTML = '';
    fetch('http://10.251.4.137/api/news/get_all_news', {
        method: 'GET',
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error response: ', response.text);
        }
        
        return response.json();
    })
    .then(data => {
        all_news_block.innerHTML = ''
        data.forEach(each => {
            let block_item = document.createElement('div');
            block_item.className = "item";

            let block_image = document.createElement('div');
            block_image.className = 'image';

            let news_image = document.createElement('img');

            let photoPaths = each.photo_path.split(';');
            if (photoPaths[0] === "No Photo") {
                news_image.src = 'static/images/partners.png';
            } else {
                news_image.src = `http://10.251.4.137/api/news/upload?photo_path=${photoPaths[0]}`;
            }
            block_image.appendChild(news_image);
    
            block_item.appendChild(block_image);

            let news_title = document.createElement('label');
            news_title.innerText = each.title_eng;
            block_item.appendChild(news_title);

            let block_date = document.createElement('div');
            block_date.className = "date";

            let date_icon = document.createElement('img');
            date_icon.src = 'static/images/clock.png';
            block_date.appendChild(date_icon);

            let date_span = document.createElement('span');
            date_span.innerText = each.date;
            block_date.appendChild(date_span)

            block_item.appendChild(block_date)

            all_news_block.appendChild(block_item);

            block_item.addEventListener('click', function() {
                console.log(each);
                let one_new = document.querySelector('.news_content');
                one_new.innerHTML = '';

                let all_images = document.createElement('div');
                all_images.className = 'images';

                let opened_image = document.createElement('div');
                opened_image.classList = 'opened_image';

                let opened_img = document.createElement('img');
                opened_img.src = `http://10.251.4.137/api/news/upload?photo_path=${photoPaths[0]}`;
                opened_image.appendChild(opened_img);

                let closed_images = document.createElement('div');
                closed_images.className = 'closed';

                for (let i = 0; i < photoPaths.length; i++) {
                    let image_div = document.createElement('div');
                    image_div.className = 'image';

                    let cl_image = document.createElement('img');
                    cl_image.src = `http://10.251.4.137/api/news/upload?photo_path=${photoPaths[i]}`;
                    image_div.appendChild(cl_image);
                    closed_images.appendChild(image_div);

                    image_div.addEventListener('click', function() {
                        opened_img.src = `http://10.251.4.137/api/news/upload?photo_path=${photoPaths[i]}`
                    });
                }

                all_images.appendChild(opened_image);
                all_images.appendChild(closed_images);


                let date = document.createElement('div');
                date.className = 'date';

                let date_icon = document.createElement('img');
                date_icon.src = 'static/images/clock.png';
                date.appendChild(date_icon);

                let date_span = document.createElement('span');
                date_span.innerText = each.date;
                date.appendChild(date_span);

                let title = document.createElement('div');
                title.className = 'title';
                title.innerText = each.title;

                let text = document.createElement('div');
                text.className = 'text';
                text.innerHTML = each.text;

                one_new.appendChild(all_images);
                
                one_new.appendChild(date);
                one_new.appendChild(title);
                one_new.appendChild(text);
            });
        });
    })
    .catch(error => {
        console.error('Catch error: ', error.message);
    })

});