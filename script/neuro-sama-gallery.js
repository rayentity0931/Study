// 图片路径数组
const imageData = [
    'galleryImage/Neuro getting uncomfortable.gif',
    'galleryImage/Neko Neuro nodding.gif',
    'galleryImage/clown Neuro vibing.gif',
    'galleryImage/Really.gif',
    'galleryImage/No~.gif',
    'galleryImage/Neuro wink.gif',
    'galleryImage/Neuro frog wink.gif',
    'galleryImage/Neuro getting angry.gif',
    // 继续添加更多图片路径
];

// 获取画廊容器
const gallery = document.getElementById('gallery');

// 函数：加载并显示所有图片
function loadImages() {
    // 清空画廊
    gallery.innerHTML = '';
    
    // 遍历所有图片路径并创建图片元素
    imageData.forEach((src) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Loading...';

        imageDiv.appendChild(img);
        gallery.appendChild(imageDiv);
    });
}

// 初始化加载图片
loadImages();
