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
    { name: 'Neuro - Anamanaguchi', src: 'NeuroMusic/Anamanaguchi.mp3', image: 'trackimages/neurohead.jpg' },
];

// 點擊歌單中的歌曲時
document.querySelectorAll('.scroll-box p').forEach((songElement, index) => {
    songElement.addEventListener('click', () => {
        if (index < audioFiles.length) {
            // 保存選中的歌曲到 localStorage
            localStorage.setItem('currentTrack', index);
            window.location.href = "neuro-sama-karaoke.html"; // 跳回 karaoke 頁面
        }
    });
});

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