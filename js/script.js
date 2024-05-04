// toggle class active
const navbarNav = document.querySelector
    ('.navbar-navigasi');
// ketika menu menu di klink
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// klik diluar sidebar untuk menghilangkan nav

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})