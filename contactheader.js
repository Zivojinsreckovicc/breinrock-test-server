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
    const header = document.querySelector("header");
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Only add listeners if both elements exist
    if (header && navbarCollapse) {
        // Add the class when the menu is shown
        navbarCollapse.addEventListener('show.bs.collapse', () => {
            header.classList.add('menu-expanded');
        });

        // Remove the class when the menu is hidden
        navbarCollapse.addEventListener('hide.bs.collapse', () => {
            header.classList.remove('menu-expanded');
        });
    }
});
