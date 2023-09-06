const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// JavaScript to toggle the responsive navbar
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// JavaScript (in a separate .js file or in a script tag)

document.addEventListener("DOMContentLoaded", function () {
    const footerColumns = document.querySelectorAll(".footer-column");

    footerColumns.forEach((column) => {
        column.addEventListener("click", () => {
            const ul = column.querySelector("ul");
            ul.classList.toggle("active");
        });
    });
});
