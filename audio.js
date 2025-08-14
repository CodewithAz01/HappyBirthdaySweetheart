document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("aud.mp3"); // Replace with your MP3 file path
    audio.loop = true; // Repeat music
    audio.volume = 0.7; // Optional: set volume (0.0 to 1.0)
    audio.playbackRate = 1.2;

    // Try to autoplay immediately
    audio.play().catch(() => {
        console.log("Autoplay blocked — will play on first click/tap.");
        // Fallback: play when the user interacts
        document.addEventListener("click", function startMusic() {
            audio.play();
            document.removeEventListener("click", startMusic);
        });
    });
});
