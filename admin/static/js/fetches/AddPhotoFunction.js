// Массив для хранения всех файлов
window.allFiles = [];

document.getElementById('add_photo_button').addEventListener('change', function(event) {
    const files = event.target.files; // Получаем все выбранные файлы

    // Добавляем новые файлы в глобальную переменную allFiles
    window.allFiles = [...window.allFiles, ...files];  // Добавляем новые файлы к уже существующим

    // Проходим по каждому файлу и создаем элементы для отображения
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Проверяем, что это изображение
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Создаем div с классом "item"
                const newItem = document.createElement('div');
                newItem.classList.add('item');

                // Создаем изображение
                const img = document.createElement('img');
                img.src = e.target.result; // Устанавливаем источник изображения

                // Добавляем изображение в item
                newItem.appendChild(img);

                // Добавляем новый элемент в контейнер
                document.querySelector('.add_photo .items').appendChild(newItem);
            }

            // Читаем файл как Data URL
            reader.readAsDataURL(file);
        }
    }
});
