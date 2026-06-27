const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");

mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }
});