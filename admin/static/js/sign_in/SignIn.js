let sign_in_button = document.getElementById('sign_in');

sign_in_button.addEventListener('click', function() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    let formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);

    fetch('http://147.45.233.158//auth/sign_in', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error: ', response.text);
        }
        return response.json();
    })
    .then(data => {
        let error = document.getElementById('error');
        if(data.status_code == 404) {
            error.classList.toggle('show');
        }
        else if(data.status_code == 200) {
            document.cookie = `token=${data.token}; path=/; max-age=604800;`;
            console.log('Token saved to cookies for 7 days');
            window.location.href = "admin.html";
        }
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    })
})