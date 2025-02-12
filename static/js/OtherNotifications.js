const notification = document.querySelector(".notification");

notification.addEventListener('click', function() {
    notification.classList.add("show");
});

const exit_notification = document.querySelector(".notification .exit");

exit_notification.addEventListener('click', function() {
    event.stopPropagation(); 
    notification.classList.remove('show');
})