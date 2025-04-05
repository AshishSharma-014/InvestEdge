document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for About link
    document.querySelector('a[href="#about"]').addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });

    // Fade-in effect for About heading
    const aboutHeading = document.querySelector(".about h2");
    if (aboutHeading) {
        aboutHeading.style.opacity = "0";
        setTimeout(() => {
            aboutHeading.style.opacity = "1";
        }, 500);
    }

    // Collapsible sections
    document.querySelectorAll(".about h3").forEach((heading) => {
        heading.addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
