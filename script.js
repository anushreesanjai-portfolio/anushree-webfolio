// Get elements
const audio = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

// Play/Pause functionality
musicBtn.addEventListener("click", function() {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = "Play Music 🎵";
    } else {
        audio.play().catch(error => console.log("Autoplay blocked, user must interact first."));
        musicBtn.textContent = "Pause Music ⏸";
    }
    isPlaying = !isPlaying;
});
