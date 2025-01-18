let all_partners = document.getElementById('all_partners');
let all_partners_menu = document.querySelector('.all_partners');

let add_partner = document.getElementById('add_partner');
let add_partner_menu = document.querySelector('.add_partner');

all_partners.addEventListener('click', function() {
    all_partners_menu.classList.toggle('show');
    add_partner_menu.classList.remove('show');
})

add_partner.addEventListener('click', function() {
    all_partners_menu.classList.remove('show');
    add_partner_menu.classList.toggle('show');
})