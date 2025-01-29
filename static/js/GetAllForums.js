document.addEventListener('DOMContentLoaded', function() {
    fetch('http://10.251.4.137/api/forum/get_forum', {
        method: 'GET'
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Response Error', response.text())
        }

        return response.json();
    })
    .then(data => {
        let hover_forum_menu = document.querySelector('.hover_forum_menu ul');

        hover_forum_menu.innerHTML = ''

        data.forEach(each => {

            let li = document.createElement('li');
            
            let a_href = document.createElement('a');
            a_href.innerText = `Форум ${each.year}`;
            a_href.href = `forum.html?${each.id}`;
            li.appendChild(a_href);
            
            hover_forum_menu.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    });
});