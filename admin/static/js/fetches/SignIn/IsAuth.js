function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : null;
}

document.addEventListener('DOMContentLoaded', function() {
    let token = getCookie("token"); // Замените "auth_token" на нужное имя куки
    
    let formData = new FormData()

    formData.append('token', token)

    fetch('http://10.251.4.137/api/auth/check_cookie', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Response Error: ', response.text());
        }

        return response.json();
    })
    .then(data => {
        if(data.status_code == 200) {
            window.location.href = 'admin.html';
        }else {
            deleteCookie('token');
        }
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    })
});

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}
