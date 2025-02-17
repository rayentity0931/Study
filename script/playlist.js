document.querySelectorAll('.scroll-box p').forEach((songElement) => {
    songElement.addEventListener('click', (event) => {
      const songIndex = event.target.dataset.song; // 取得選中的歌的索引
      localStorage.setItem('selectedSongIndex', songIndex); // 保存索引到localStorage
      window.location.href = 'neuro-sama-karaoke.html'; // 跳回neuro-sama-karaoke頁面
    });
  });
  
  document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = 'neuro-sama-karaoke.html'; // 點擊返回時跳回neuro-sama-karaoke頁面
  });  