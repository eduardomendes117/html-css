document.addEventListener("DOMContentLoaded", (event) => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");

    menu.addEventListener("click", () => nav.classList.toggle("active"));
});