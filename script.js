document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.textContent = this.dataset.hover; // Change text on hover
    });

    item.addEventListener('mouseout', function () {
        this.textContent = this.dataset.hover === "Hard" ? "Work" : 
                          this.dataset.hover === "Play Hard" ? "Studios" : "Recognition"; // Revert text
    });
});


document.getElementById('video-overlay').addEventListener('click', function() {
    // Get the iframe and modify the src to autoplay the video
    const video = document.getElementById('youtube-video');
    const videoSrc = video.src;
    video.src = videoSrc + "&autoplay=1"; // Enable autoplay by modifying the src

    // Hide the overlay
    this.style.display = 'none';
});
