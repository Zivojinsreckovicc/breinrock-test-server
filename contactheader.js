document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Adjust this value for the scroll amount before the background changes
    const scrollTriggerHeight = 50;

    function checkScroll() {
        if (window.scrollY > scrollTriggerHeight) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    }

    // Check scroll on load and when the user scrolls
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case the page is already scrolled
});


document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const header = document.querySelector("header");

    navbarToggler.addEventListener("click", function () {
        header.classList.toggle("menu-expanded");
    });
});
