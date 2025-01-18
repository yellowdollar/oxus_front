const fileInput = document.getElementById('photos');
const imagesContainer = document.querySelector('.images');

let fileArray = [];

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    fileArray = [...fileArray, ...Array.from(files)]; 

    imagesContainer.innerHTML = '';

    fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            let image_div = document.createElement('div');
            image_div.className = "image";

            let image = document.createElement('img');
            image.src = e.target.result;

            image_div.appendChild(image);
            imagesContainer.appendChild(image_div);
        };
        reader.readAsDataURL(file);
    });
});
let add_news_input = document.getElementById('add_news_input');

add_news_input.addEventListener('click', function() { 
    var delta = quill.root.innerHTML;

    console.log(delta);
});
