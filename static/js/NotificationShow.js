const notification = document.querySelector(".notification");
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        notification.classList.toggle("show");
    }, 1000); // 1000 миллисекунд = 1 секунда
});

notification.addEventListener('click', function() {
    notification.classList.add("show");
});

const exit_notification = document.querySelector(".notification .exit");

exit_notification.addEventListener('click', function() {
    event.stopPropagation(); 
    notification.classList.remove('show');
})