document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');

    // Check if the music was playing before
    const isPlaying = localStorage.getItem('musicPlaying') === 'true';
    const currentTime = parseFloat(localStorage.getItem('musicCurrentTime')) || 0;

    // Set the music to the saved state
    audio.currentTime = currentTime;
    if (isPlaying) {
        audio.play();
    }

    // Event listeners for buttons
    playButton.addEventListener('click', () => {
        audio.play();
        localStorage.setItem('musicPlaying', 'true');
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        localStorage.setItem('musicPlaying', 'false');
    });

    // Save the current time of the music
    audio.addEventListener('timeupdate', () => {
        localStorage.setItem('musicCurrentTime', audio.currentTime);
    });

    // Cleanup on unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicCurrentTime', audio.currentTime);
    });
});
