document.addEventListener("DOMContentLoaded", function () {
    const hoverForum = document.getElementById("hover_forum");
    const forumMenu = document.querySelector(".hover_forum_menu");

    hoverForum.addEventListener("mouseenter", function () {
        forumMenu.classList.add("active");
        const rect = hoverForum.getBoundingClientRect();
        forumMenu.style.top = `${rect.bottom + window.scrollY}px`;
        forumMenu.style.left = `${rect.left + window.scrollX}px`;
    });

    hoverForum.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!forumMenu.matches(":hover")) {
                forumMenu.classList.remove("active");
            }
        }, 200);
    });

    forumMenu.addEventListener("mouseleave", function () {
        forumMenu.classList.remove("active");
    });

    forumMenu.addEventListener("mouseenter", function () {
        forumMenu.classList.add("active");
    });
});
