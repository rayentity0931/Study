const audioFiles = [
    { name: 'Neuro - The Phoenix', src: 'music/Neuro-sama The Phoenix.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - Believer', src: 'music/Neuro-Sama Believer.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - In The End', src: 'music/Neuro-Sama In The End.mp3', image: 'trackimages/neurohead.jpg' },
    { name: 'Neuro - A Thousand Years', src: 'music/Neuro-sama A Thousand Years.mp3', image: 'trackimages/neurohead.jpg' },
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
