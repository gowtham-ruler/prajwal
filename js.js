
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation menu
    const navbar = document.querySelector(".navbar nav");

    const menuButton = document.createElement("button");
    menuButton.textContent = "☰";
    menuButton.className = "menu-button";
    menuButton.setAttribute("aria-label", "Toggle navigation");

    const header = document.querySelector(".navbar");

    if (header && navbar) {
        header.insertBefore(menuButton, navbar);

        menuButton.addEventListener("click", function () {
            navbar.classList.toggle("show-menu");

            menuButton.textContent =
                navbar.classList.contains("show-menu") ? "✕" : "☰";
        });
    }

    // Warrior selection form validation
    const warriorForm = document.querySelector("#warrior-form");

    if (warriorForm) {
        warriorForm.addEventListener("submit", function (event) {

            const selectedWarrior = document.querySelector(
                'input[name="warrior"]:checked'
            );

            if (!selectedWarrior) {
                event.preventDefault();
                alert("Please choose your favourite warrior!");
                return;
            }

            const visitor = document.querySelector(
                'input[name="visitor"]'
            );

            if (visitor) {
                visitor.value = visitor.value.trim();
            }
        });
    }

    // Display selected warrior and motto on page2.html
    const params = new URLSearchParams(window.location.search);

    const visitorName = params.get("visitor");
    const warriorName = params.get("warrior");
    const dialogue = params.get("dialogue");

    const welcomeMessage = document.querySelector("#welcome-message");
    const choiceSummary = document.querySelector("#choice-summary");

    if (welcomeMessage && visitorName) {
        welcomeMessage.textContent =
            "Welcome to Mahishmati, " + visitorName + "!";
    }

    if (choiceSummary && (warriorName || dialogue)) {
        choiceSummary.textContent =
            "Your warrior: " + (warriorName || "Not selected") +
            " | Your motto: " + (dialogue || "Dharma");

        choiceSummary.hidden = false;
    }

    // Smooth scrolling for links to page sections
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Simple image loading fallback
    document.querySelectorAll("img").forEach(function (image) {
        image.addEventListener("error", function () {
            image.style.backgroundColor = "#21190e";
            image.alt = "Image unavailable - Baahubali Kingdom of Mahishmati";
        });
    });

});
