// 图片路径数组
const imageData = [
    'galleryImage/10 eyes.gif',
    'galleryImage/angry blush.gif',
    'galleryImage/blush to question.gif',
    'galleryImage/bong bong.gif',
    'galleryImage/cat evil blush.gif',
    'galleryImage/cat neuro sing.gif',
    'galleryImage/cat neuro vibing.gif',
    'galleryImage/chance.gif',
    'galleryImage/cheer about it.gif',
    'galleryImage/chew.gif',
    'galleryImage/close eyes.gif',
    'galleryImage/clown evil.gif',
    'galleryImage/clown Neuro vibing.gif',
    'galleryImage/crash out.gif',
    'galleryImage/evil 3.gif',
    'galleryImage/evil ha.gif',
    'galleryImage/evil heart eyes.gif',
    'galleryImage/evil impressed.gif',
    'galleryImage/evil karaoke.gif',
    'galleryImage/evil looking.gif',
    'galleryImage/evil minecraft.gif',
    'galleryImage/evil no with tutle.gif',
    'galleryImage/evil osu move.gif',
    'galleryImage/evil purple rubberbang.gif',
    'galleryImage/evil redding.gif',
    'galleryImage/evil rotate.gif',
    'galleryImage/evil sing ball.gif',
    'galleryImage/evil star eyes.gif',
    'galleryImage/evil with a bat.gif',
    'galleryImage/failure.gif',
    'galleryImage/fast moving.gif',
    'galleryImage/frog neuro rotating.gif',
    'galleryImage/moving mouth.gif',
    'galleryImage/misinformation.gif',
    'galleryImage/keep yapping.gif',
    'galleryImage/gullible.gif',
    'galleryImage/neko neuro question mark.gif',
    'galleryImage/Neko Neuro nodding.gif',
    'galleryImage/neko neuro getting close.gif',
    'galleryImage/neko evil blush.gif',
    'galleryImage/neuro aaaaaaa3.gif',
    'galleryImage/neuro blink at user.gif',
    'galleryImage/neuro blinking.gif',
    'galleryImage/neuro cry about it.gif',
    'galleryImage/Neuro getting uncomfortable.gif',
    'galleryImage/Neuro getting angry.gif',
    'galleryImage/Neuro frog wink.gif',
    'galleryImage/neuro cry karaoke.gif',
    'galleryImage/neuro looking around.gif',
    'galleryImage/neuro moving eyes.gif',
    'galleryImage/neuro moving.gif',
    'galleryImage/neuro shake head.gif',
    'galleryImage/No~.gif',
    'galleryImage/Neuro wink.gif',
    'galleryImage/neuro waving.gif',
    'galleryImage/neuro sway.gif',
    'galleryImage/plane.gif',
    'galleryImage/Really.gif',
    'galleryImage/report this cutie.gif',
    'galleryImage/saw what you delete.gif',
    'galleryImage/short and long.gif',
    'galleryImage/shut up.gif',
    'galleryImage/sing wink.gif',
    'galleryImage/twin dancing.gif',
    'galleryImage/twin fight for screen.gif',
    'galleryImage/up and down.gif',
    'galleryImage/v3 and tutle.gif',
    'galleryImage/v3 neuro 3.gif',
    'galleryImage/v3 question.gif',
    'galleryImage/who asked.gif',
    'galleryImage/who is we.gif',
    'galleryImage/wink with shylily.gif',
    'galleryImage/wobble.gif',
    'galleryImage/yup.gif'
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
