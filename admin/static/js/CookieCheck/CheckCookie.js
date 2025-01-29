document.addEventListener('DOMContentLoaded', function() {
    let token = getCookie('token');
    
    let formData = new FormData();
    formData.append('token', token);

    fetch('http://10.251.4.137/api/auth/check_cookie', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error: ', response.text)
        }

        return response.json();
    })
    .then(data => {
        if(data.status_code != 200) {
            window.location.href = 'sign_in.html'
        } 
    })
    .catch(error => {
        console.error('Catch: ', error.message);
    })
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
