document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect for Privacy Policy heading
    const privacyHeading = document.querySelector(".privacy-policy h1");
    if (privacyHeading) {
        privacyHeading.style.opacity = "0";
        setTimeout(() => {
            privacyHeading.style.opacity = "1";
        }, 500);
    }

    // Smooth scroll to sections on click
    document.querySelectorAll(".privacy-policy h2").forEach((heading) => {
        heading.addEventListener("click", function () {
            this.scrollIntoView({ behavior: "smooth" });
        });
    });
});
