// Находим все контейнеры с классом .images
const imagesContainers = document.querySelectorAll('.context .blocks .images');

imagesContainers.forEach(imagesContainer => {
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    // Событие нажатия кнопки мыши
    imagesContainer.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - imagesContainer.offsetLeft; // Начальная позиция мыши по X
        scrollLeft = imagesContainer.scrollLeft; // Начальная позиция прокрутки по X
        imagesContainer.style.cursor = 'grabbing'; // Курсор захвата при начале прокрутки
    });

    // Событие отпускания кнопки мыши
    imagesContainer.addEventListener('mouseup', () => {
        isMouseDown = false;
        imagesContainer.style.cursor = 'grab'; // Возвращаем курсор в "grab" после отпускания
    });

    // Событие выхода мыши за пределы
    imagesContainer.addEventListener('mouseleave', () => {
        if (isMouseDown) {
            imagesContainer.style.cursor = 'grab'; // Возвращаем курсор в "grab", если мышь покинула элемент
        }
        isMouseDown = false;
    });

    // Событие движения мыши
    imagesContainer.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return; // Если мышь не зажата, ничего не делаем

        e.preventDefault(); // Отменяем стандартное поведение

        const x = e.pageX - imagesContainer.offsetLeft; // Новая позиция мыши по X
        const walk = (x - startX) * 2; // Рассчитываем прокрутку, пропорциональную перемещению мыши
        imagesContainer.scrollLeft = scrollLeft - walk; // Прокручиваем контейнер по оси X
    });
});
