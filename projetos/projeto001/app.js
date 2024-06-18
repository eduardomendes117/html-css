document.addEventListener("DOMContentLoaded", (event) => {
    const menubtn = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    const close = document.querySelector('.close');

    menu.addEventListener("click", () => nav.classList.toggle("active"));
    close.addEventListener("click", () => nav.classList.toggle("active"));

    document.querySelector('.menu-icon').addEventListener('click', function() {
        const menu = document.querySelector(".menu");
        const close = document.querySelector('.close');

        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            close.style.display = 'none';
        } else {
            menu.style.display = 'none';
            close.style.display = 'block';
        }
    });
});