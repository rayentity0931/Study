const audioFiles = [
    { name: 'Neuro - The Phoenix', src: 'NeuroMusic/The Phoenix.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Believer', src: 'NeuroMusic/Believer.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro X Evil - In The End', src: 'NeuroMusic/In The End.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - A Thousand Years', src: 'NeuroMusic/A Thousand Years.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Discord', src: 'NeuroMusic/Discord.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Evil - Youre Gonna Go Far Kid', src: 'NeuroMusic/Youre Gonna Go Far Kid.mp3', image: 'trackimages/neurohead.jpg' },
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
