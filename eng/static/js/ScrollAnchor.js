let forum_info = document.querySelector('.forum-info');
let program = document.querySelector('.program');

document.getElementById('anchor_about').addEventListener('click', function() {
    forum_info.scrollIntoView({behavior: "smooth"});
})

document.getElementById('anchor_program').addEventListener('click', function() {
    program.scrollIntoView({behavior: "smooth"});
})