const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const trackNameElement = document.getElementById('trackName');
const trackImageElement = document.getElementById('trackImage');
const audio = document.getElementById('audioPlayer');
const customProgress = document.getElementById('customProgress');

const audioFiles = [
    { name: 'Neuro - The Phoenix', src: 'NeuroMusic/The Phoenix.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Believer', src: 'NeuroMusic/Believer.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro X Evil - In The End', src: 'NeuroMusic/In The End.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - A Thousand Years', src: 'NeuroMusic/A Thousand Years.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Discord', src: 'NeuroMusic/Discord.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil - Youre Gonna Go Far Kid', src: 'NeuroMusic/Youre Gonna Go Far Kid.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil - Monster', src: 'NeuroMusic/Monster.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Wellerman', src: 'NeuroMusic/Wellerman.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Firework', src: 'NeuroMusic/Firework.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro X Evil - Get Lucky', src: 'NeuroMusic/Get Lucky.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - ECHO', src: 'NeuroMusic/ECHO.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Waiting For Love', src: 'NeuroMusic/Waiting For Love.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro X Evil - In Hell We Live Lament', src: 'NeuroMusic/In Hell We Live Lament.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Kawaikute Gomen', src: 'NeuroMusic/Kawaikute Gomen.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro X Evil - GODS', src: 'NeuroMusic/GODS.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Racing Into The Night', src: 'NeuroMusic/Racing Into The Night.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Want You Gone', src: 'NeuroMusic/Want You Gone.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil - Great War', src: 'NeuroMusic/Great War.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Your Reality', src: 'NeuroMusic/Your Reality.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - IDOL', src: 'NeuroMusic/IDOL.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil - The Rumbling', src: 'NeuroMusic/The Rumbling.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro X Evil - Mesmerizer', src: 'NeuroMusic/Mesmerizer.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil X Camila - EVIL', src: 'NeuroMusic/EVIL.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - LIFE', src: 'NeuroMusic/LIFE.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Radioactive', src: 'NeuroMusic/Radioactive.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - After Dark', src: 'NeuroMusic/After Dark.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil - Centuries', src: 'NeuroMusic/Centuries.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Cupid', src: 'NeuroMusic/Cupid.mp3', image: 'trackimages/neurohead.jpg' },
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

// 點擊歌單中的歌曲時
document.querySelectorAll('.scroll-box p').forEach((songElement, index) => {
    songElement.addEventListener('click', () => {
        if (index < audioFiles.length) {
            currentTrack = index;
            audioPlayer.src = audioFiles[currentTrack].src;
            updateTrackName();
            audioPlayer.pause();
            isPlaying = false;
            playPauseButton.textContent = '\u25BA';
            // 保存選擇的歌曲到 localStorage
            localStorage.setItem('currentTrack', currentTrack);
        }
    });
});

// 創建並顯示切換歌單的按鈕
const toggleListButton = document.createElement('button');
toggleListButton.textContent = '📜 歌單';
toggleListButton.classList.add('toggle-list-button');
document.body.appendChild(toggleListButton);

const musicPlayer = document.querySelector('.music-player-body');
const songList = document.querySelector('.scroll-box');

let isListVisible = false;

// 檢查是否為手機設備
const isMobile = window.innerWidth <= 768;

toggleListButton.addEventListener('click', () => {
    if (isMobile) {
        // 手機版，切換到新介面顯示歌單
        window.location.href = "playlist.html"; // 導向新介面
    } else {
        // 桌面版，顯示或隱藏歌單
        if (isListVisible) {
            songList.style.display = 'none';  // 隱藏歌單
        } else {
            songList.style.display = 'block'; // 顯示歌單
        }
        isListVisible = !isListVisible;
    }
});

// 更新進度條的函數
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  customProgress.style.width = `${progress}%`;
});

// 從 localStorage 中加載歌曲
const savedTrack = localStorage.getItem('currentTrack');
if (savedTrack !== null) {
    currentTrack = parseInt(savedTrack, 10);
    audioPlayer.src = audioFiles[currentTrack].src;
    updateTrackName();
    audioPlayer.play();
} else {
    audioPlayer.src = audioFiles[0].src;
    updateTrackName();
}

audioPlayer.volume = 0.5;

updateTrackName();

const userInput = document.getElementById('userInput');
const songElements = document.querySelectorAll('.scroll-box p');

userInput.addEventListener('input', () => {
    const filterText = userInput.value.toLowerCase(); // 取得小寫字母

    songElements.forEach((songElement) => {
        const songName = songElement.textContent.toLowerCase();
        // 檢查歌名是否包含輸入的文字
        if (songName.includes(filterText)) {
            songElement.style.display = 'block'; // 顯示符合的歌曲
        } else {
            songElement.style.display = 'none';  // 隱藏不符合的歌曲
        }
    });
});