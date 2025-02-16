const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const trackNameElement = document.getElementById('trackName');
const trackImageElement = document.getElementById('trackImage');

const audioFiles = [
    { name: 'Neuro - The Phoenix', src: 'music/Neuro-sama The Phoenix.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Believer', src: 'music/Neuro-Sama Believer.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - In The End', src: 'music/Neuro-Sama In The End.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - A Thousand Years', src: 'music/Neuro-sama A Thousand Years.mp3', image: 'trackimages/neurohead.jpg' },
];

let currentTrack = 0;
let isPlaying = false;

function updateTrackName() {
    trackNameElement.textContent = audioFiles[currentTrack].name;
    trackImageElement.src = audioFiles[currentTrack].image;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseButton.textContent = '\u25BA';
    } else {
        audioPlayer.play();
        isPlaying = true;
        playPauseButton.textContent = '\u275A\u275A';
    }
}

playPauseButton.addEventListener('click', () => {
    togglePlayPause();
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % audioFiles.length;
    audioPlayer.src = audioFiles[currentTrack].src;
    updateTrackName();
    if (isPlaying) {
        audioPlayer.play();
    }
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
    audioPlayer.src = audioFiles[currentTrack].src;
    updateTrackName();
    if (isPlaying) {
        audioPlayer.play();
    }
});

document.querySelectorAll('.scroll-box p').forEach((songElement, index) => {
    songElement.addEventListener('click', () => {
        if (index < audioFiles.length) {
            currentTrack = index;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            audioPlayer.pause();
            isPlaying = false;
            playPauseButton.textContent = '\u25BA';
        }
    });
});

audioPlayer.volume = 0.5;

updateTrackName();
