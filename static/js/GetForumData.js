document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;

    const queryString = url.split('?')[1];

    let forumId = null;
    if(queryString) {
        forumId = queryString
    }

    if(forumId) {
        // MAIN FETCH
        fetch(`http://147.45.233.158/api/forum/get_forum?id=${forumId}`, {
            method: 'GET'
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Response Error: ', response.text());
            }

            return response.json();
        })
        .then(data => {
            // const place = data[0].place;
            // const placeArray = place.split(',');

            // let forum_place = document.querySelector('.forum-info .place');
            
            // if(placeArray.length >= 2) {
            //     forum_place.innerText += ` "${placeArray[0]}" и ${placeArray[1]}`
            // }else {
            //     forum_place.innerText += ` "${placeArray[0]}"`
            // }

            // GET SPEAKERS FETCH
            fetch(`http://147.45.233.158/api/speakers/get_speakers?id=${data[0].id}`, {
                method: 'GET'
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error('Response Error', response.text())
                }

                return response.json();
            })
            .then(data => {
                let speakers_experts_items = document.querySelector('.speakers_experts .items');
                speakers_experts_items.innerHTML = '';

                data.forEach(each => {
                    let item = document.createElement('div');
                    item.className = 'item';

                    let image_div = document.createElement('div');
                    image_div.className = 'image';

                    let img = document.createElement('img');
                    img.src = `http://147.45.233.158/api/news/upload?photo_path=${each.photo_path}`;
                    image_div.appendChild(img);

                    
                    let fio_div = document.createElement('div');
                    fio_div.className = 'fio';
                    
                    let first_span = document.createElement('span');
                    first_span.innerText = each.name;
                    
                    let second_span = document.createElement('span');
                    second_span.innerText = each.work_place;

                    fio_div.appendChild(first_span);
                    fio_div.appendChild(second_span);
                    
                    item.appendChild(image_div);
                    item.appendChild(fio_div);

                    let line_div = document.createElement('div');
                    line_div.className = 'line';

                    item.appendChild(line_div);

                    speakers_experts_items.appendChild(item);
                });
            })
            .catch(error => {
                console.error('Catch Error: ', error.message);
            })

            // GET HONORARY FETCH
            fetch(`http://147.45.233.158/api/honorary/get_honorary?forum_id=${data[0].id}`, {
                method: 'GET'
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error('Response Error', response.text())
                }

                return response.json();
            })
            .then(data => {
                let guests_items = document.querySelector('.guests .items');
                
                guests_items.innerHTML = '';
                
                data.forEach(each => {
                    let item = document.createElement('div');
                    item.className = 'item';

                    let image_div = document.createElement('div');
                    image_div.className = 'image';

                    let img = document.createElement('img');
                    img.src = `http://147.45.233.158/api/news/upload?photo_path=${each.photo_path}`;
                    image_div.appendChild(img);

                    let fio_div = document.createElement('div');
                    fio_div.className = 'fio';

                    let first_span = document.createElement('span');
                    first_span.innerText = each.name;

                    let second_span = document.createElement('span');
                    second_span.innerText = each.work_place;

                    fio_div.appendChild(first_span);
                    fio_div.appendChild(second_span);

                    item.append(image_div);
                    item.appendChild(fio_div);

                    let line = document.createElement('div');
                    line.className = 'line';
                    item.appendChild(line);
                    
                    guests_items.appendChild(item);
                });
            })
            .catch(error => {
                console.error('Catch Error: ', error.message);
            })

            // GET PROGRAM DATA
            // fetch(`http://10.251.4.137/api/program/get_program?forum_id=${data[0].id}`, {
            //     method: 'GET'
            // })
            // .then(response => {
            //     if(!response.ok) {
            //         throw new Error("Response Error: ", response.text())
            //     }

            //     return response.json()
            // })
            // .then(data => {
            //     let program_items = document.querySelector('.program .items');
            //     program_items.innerHTML = '';

            //     data.forEach(each => {
            //         let item = document.createElement('div');
            //         item.className = 'item';

            //         let big_div = document.createElement('div');
            //         big_div.className = 'big';

            //         let time_span = document.createElement('span');
            //         time_span.innerText = each.time;

            //         let title_span = document.createElement('span');
            //         title_span.innerText = each.title;

            //         big_div.appendChild(time_span);
            //         big_div.appendChild(title_span);

            //         let small_div = document.createElement('div');
            //         small_div.className = 'small';

            //         let small_span = document.createElement('span');
            //         small_span.innerHTML = each.text;

            //         small_div.appendChild(small_span);

            //         item.appendChild(big_div);
            //         item.appendChild(small_div);
            //         program_items.appendChild(item);
            //     });
            // })
            // .catch(error => {
            //     console.error('Catch Error: ', error.message);
            // })
        })      
        .catch(error => {
            console.error('Catch Error: ', error.message);
        })
    }
})