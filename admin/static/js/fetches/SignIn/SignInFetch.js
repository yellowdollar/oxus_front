let sign_button = document.getElementById('sign_button');

sign_button.addEventListener('click', function() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value

    let formData = new FormData();

    formData.append('login', login);
    formData.append('password', password);
    
    fetch('http://10.251.4.137/api/auth/sign_in', {
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
            setCookie('token', data.token, 7);
            window.location.href = 'admin.html'
        }else {
            let error_text = document.querySelector('.error_text');

            error_text.innerHTML = "Неправильный Логин или пароль";
            error_text.classList.toggle('show');
        }
    })
    .catch(error => {
        console.error('Error: ', error.message);
    })
});

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

