function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : null;
}

document.addEventListener('DOMContentLoaded', function() {
    let token = getCookie('token');

    let formData = new FormData();
    formData.append('token', token);

    fetch('https://jewelryforum.tj/api/auth/check_cookie', {
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
        console.log(data);
    }) 
    .catch(error => {
        console.error('Catch error: ', error.message);
    })
});