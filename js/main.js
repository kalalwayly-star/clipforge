// =====================================
// CLIPFORGE MAIN JAVASCRIPT
// =====================================

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });
}

// Close mobile menu after clicking a link
if (navigation) {
    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("active");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open menu");
            }
        });
    });
}

// Automatically update copyright year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

console.log("ClipForge website initialized successfully.");
