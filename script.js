const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelector("nav")


// open and collapse navbar on mobile
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open")

    if (navLinks.classList.contains("open")) {
        menuBtn.textContent = "✕";
        navBar.style.padding = "10px 0 40px";
    } else {
        menuBtn.textContent = "≡";
        navBar.style.padding = "0";
    }
});