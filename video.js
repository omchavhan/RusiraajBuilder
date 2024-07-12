<script>
document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('video');

    videos.forEach(function(video) {
        // Ensure the video plays automatically with sound
        video.muted = false; // Ensure sound is on
        video.autoplay = true;

        // Load and play the video
        video.load();
        video.play().catch(error => {
            console.error('Error attempting to play video:', error);
        });

        // Temporarily remove controls to avoid showing the initial play button
        video.controls = false;

        // Once the video can play, show the controls again
        video.addEventListener('canplay', function() {
            video.controls = true;
        });

        // Disable the download option and other options
        video.controlsList = "nodownload nofullscreen noremoteplayback";
    });
});
</script>
