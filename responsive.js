document.addEventListener("DOMContentLoaded", () => {
    function applyResponsiveStyles() {
        const isMobile = window.innerWidth <= 768;

        // Adjust step card padding & font size for small screens
        document.querySelectorAll(".step").forEach(step => {
            if (isMobile) {
                step.style.padding = "20px";
                step.style.fontSize = "0.95rem";
            } else {
                step.style.padding = "40px";
                step.style.fontSize = "1rem";
            }
        });

        // Make emojis smaller on mobile
        document.querySelectorAll(".emoji").forEach(emoji => {
            emoji.style.fontSize = isMobile ? "2rem" : "3rem";
        });

        // Scale reason cards for mobile
        document.querySelectorAll(".reason-card").forEach(card => {
            card.style.margin = isMobile ? "5px" : "10px";
        });

        // Adjust heart animation camera distance for smaller screens
        if (typeof camera !== "undefined") {
            camera.position.z = isMobile ? 40 : 30;
        }
    }

    // Run on load
    applyResponsiveStyles();

    // Re-run on resize
    window.addEventListener("resize", applyResponsiveStyles);
});
