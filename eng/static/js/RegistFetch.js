let regist_send = document.getElementById('regist_send');

regist_send.addEventListener('click', function() {
    let regist_name = document.getElementById('regist_name').value;
    let regist_surname = document.getElementById('regist_surname').value;
    let regist_email = document.getElementById('regist_email').value;
    let regist_phone = document.getElementById('regist_phone').value;
    let regist_smth = document.getElementById('regist_smth').value;
    let regist_job_title = document.getElementById('job_title').value;

    let formData = new FormData();

    formData.append('name', regist_name),
    formData.append('surname', regist_surname),
    formData.append('email', regist_email),
    formData.append('phone', regist_phone),
    formData.append('job_title', regist_job_title),
    formData.append('smth', regist_smth)


    fetch('https://jewelryforum.tj/api/regist/add_regist', {
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
        if(data.status_code == 200){
            alert('Your registration has been sent. We will contact you!')
        }
    })
    .catch(error => {
        console.error('Catch Error: ', error.message);
    })
});