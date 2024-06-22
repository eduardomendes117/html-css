document.addEventListener("DOMContentLoaded", (event) => {
    const menubtn = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    const close = document.querySelector(".close");
    const links = document.querySelector(".links");
    const links2 = document.querySelector(".links2");
    const links3 = document.querySelector(".links3");

    menu.addEventListener("click", () => nav.classList.toggle("active"));
    close.addEventListener("click", () => nav.classList.remove("active"));
    

    document.querySelectorAll('.links, .links2, .links3').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("active");
            menu.style.display = 'block';
            close.style.display = 'none';
        });
    });


    menubtn.addEventListener('click', function() {

        if (menu.style.display === 'none') {
            menu.style.display = 'block';
            close.style.display = 'none';
        } else {
            menu.style.display = 'none';
            close.style.display = 'block';
        }
    });
});