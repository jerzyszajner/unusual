document.addEventListener('DOMContentLoaded', () => {
    // Handling the mysterious button's behavior
    const button = document.querySelector('.mysterious-button');
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = 'video.html'; // Redirect to video.html on click
        });
        button.addEventListener('mouseenter', () => {
            button.textContent = "Are you sure?";
        });
        button.addEventListener('mouseleave', () => {
            button.textContent = "Once you press play, you'll never walk away!"; // Revert text on mouse leave
        });
    }

    // Adding audio player functionality
    const audioElement = document.getElementById('myAudio');
    const startPauseBtn = document.getElementById('toggleStart');
    const volumeControl = document.getElementById('volumeControl');
    const muteToggle = document.getElementById('muteToggle');

    // Set initial volume to 50%
    audioElement.volume = 0.5;
    volumeControl.value = 0.5;

    // Handle start and pause functionality
    startPauseBtn.addEventListener('click', () => {
        if (audioElement.paused || audioElement.ended) {
            audioElement.play();
            startPauseBtn.textContent = 'Pause';
        } else {
            audioElement.pause();
            startPauseBtn.textContent = 'Start';
        }
    });

    // Adjust volume
    volumeControl.addEventListener('input', () => {
        audioElement.volume = volumeControl.value;
        updateTrackFill(); // Call the function to update the track fill based on the current volume
    });

    // Toggle mute
    muteToggle.addEventListener('click', () => {
        audioElement.muted = !audioElement.muted;
        muteToggle.textContent = audioElement.muted ? 'Unmute' : 'Mute';
    });

    // Function to dynamically adjust the track fill color of the volume slider
    const updateTrackFill = () => {
        const percentage = (volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min) * 100;
        volumeControl.style.background = `linear-gradient(to right, coral ${percentage}%, rgba(255, 255, 255, 0.6) ${percentage}%)`;
    };

    // Initialize the track fill based on the initial volume
    updateTrackFill();
});
