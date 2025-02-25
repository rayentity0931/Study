// 图片数据数组，每个对象包含图片路径和对应标签
const imageData = [
    { src: 'neuro-images/neuroV2cat-2.png', tags: ['neuro', 'v2', 'cat'] },
    { src: 'neuro-images/neuroV2frog-3.png', tags: ['neuro', 'v2', 'frog'] },
    { src: 'neuro-images/neuroV3cat-3.png', tags: ['neuro', 'v3', 'cat', 'vedal'] },
    { src: 'neuro-images/neuroV2frog-2.png', tags: ['neuro', 'v2', 'frog'] },
    { src: 'neuro-images/evilV2cat-2.png', tags: ['evil', 'v2', 'cat'] },
    { src: 'neuro-images/evilV1-3.png', tags: ['evil', 'v1', 'hiyori'] },
    { src: 'neuro-images/neuroV3-3.png', tags: ['neuro', 'v3', 'vedal'] },
    { src: 'neuro-images/Hiyori Momose3.png', tags: ['neuro', 'v1', 'hiyori'] },
    { src: 'neuro-images/neuroV3cat-2.png', tags: ['neuro', 'v3', 'cat'] },
    { src: 'neuro-images/evilV2frog-2.png', tags: ['evil', 'v2', 'frog'] },
    { src: 'neuro-images/neuroV2-2.png', tags: ['neuro', 'v2'] },
    { src: 'neuro-images/Hiyori Momose2.png', tags: ['neuro', 'v1', 'hiyori'] },
    { src: 'neuro-images/neuroV3-1.png', tags: ['neuro', 'v3'] },
    { src: 'neuro-images/evilV2black-1.png', tags: ['evil', 'v2', 'black eyes'] },
    { src: 'neuro-images/evilsleeping-3.png', tags: ['evil', 'v2', 'sleep', 'dress'] },
    { src: 'neuro-images/evilV2frog-1.png', tags: ['evil', 'v2', 'frog', 'cat'] },
    { src: 'neuro-images/evilV1-2.png', tags: ['evil', 'v1', 'hiyori'] },
    { src: 'neuro-images/evilV2cat-1.png', tags: ['evil', 'v2', 'cat'] },
    { src: 'neuro-images/evilV2black-3.png', tags: ['evil', 'v2', 'black eyes'] },
    { src: 'neuro-images/evilV2default-3.png', tags: ['evil', 'v2', 'purple ribbon'] },
    { src: 'neuro-images/evilV2-1.png', tags: ['evil', 'v2'] },
    { src: 'neuro-images/neurobread-3.png', tags: ['neuro', 'bread', 'plastic bag'] },
    { src: 'neuro-images/evilV2dress-1.png', tags: ['evil', 'v2', 'dress'] },
    { src: 'neuro-images/neuroV2frog-1.png', tags: ['neuro', 'v2', 'frog'] },
    { src: 'neuro-images/Hiyori Momose.png', tags: ['neuro', 'v1', 'hiyori'] },
    { src: 'neuro-images/neuroV2-3.png', tags: ['neuro', 'v2'] },
    { src: 'neuro-images/evilV2default-1.png', tags: ['evil', 'v2', 'purple ribbon', 'cat'] },
    { src: 'neuro-images/evilsleeping-2.png', tags: ['evil', 'v2', 'sleep', 'dress'] },
    { src: 'neuro-images/neurosleeping-3.png', tags: ['neuro', 'v2', 'sleep'] },
    { src: 'neuro-images/neuroV3frog-2.png', tags: ['neuro', 'v3', 'frog'] },
    { src: 'neuro-images/hiyori half.png', tags: ['neuro', 'v1', 'hiyori'] },
    { src: 'neuro-images/evilV2black-2.png', tags: ['evil', 'v2', 'black eyes'] },
    { src: 'neuro-images/evilV2default-2.png', tags: ['evil', 'v2', 'purple ribbon'] },
    { src: 'neuro-images/neuroV2cat-1.png', tags: ['neuro', 'v2', 'cat'] },
    { src: 'neuro-images/neuroV2cat-3.png', tags: ['neuro', 'v2', 'cat'] },
    { src: 'neuro-images/evilV2-2.png', tags: ['evil', 'v2'] },
    { src: 'neuro-images/evilV2cat-3.png', tags: ['evil', 'v2', 'cat'] },
    { src: 'neuro-images/evilV1-1.png', tags: ['evil', 'v1', 'hiyori'] },
    { src: 'neuro-images/neurosleeping-1.png', tags: ['neuro', 'v2', 'sleep'] },
    { src: 'neuro-images/evilV2dress-2.png', tags: ['evil', 'v2', 'dress', 'cat'] },
    { src: 'neuro-images/neuroV2witch-1.png', tags: ['neuro', 'v2', 'witch'] },
    { src: 'neuro-images/neuroV3short-3.png', tags: ['neuro', 'v3', 'short hair'] },
    { src: 'neuro-images/evilV2frog-3.png', tags: ['evil', 'v2', 'frog'] },
    { src: 'neuro-images/evilV2horn-3.png', tags: ['evil', 'v2', 'frog', 'horn'] },
    { src: 'neuro-images/evilV2horn-1.png', tags: ['evil', 'v2', 'horn'] },
    { src: 'neuro-images/neuroV2witch-2.png', tags: ['neuro', 'v2', 'witch'] },
    { src: 'neuro-images/neuroV2-1.png', tags: ['neuro', 'v2'] },
    { src: 'neuro-images/evilV2horn-2.png', tags: ['evil', 'v2', 'horn', 'cat'] },
    { src: 'neuro-images/neuroV3frog-3.png', tags: ['neuro', 'v3', 'frog'] },
    { src: 'neuro-images/neuroV3short-1.png', tags: ['neuro', 'v3', 'short'] },
    { src: 'neuro-images/neuroV2clown-2.png', tags: ['neuro', 'v2', 'clown'] },
    { src: 'neuro-images/neuroV3-2.png', tags: ['neuro', 'v3'] },
    { src: 'neuro-images/neuroV2witch-3.png', tags: ['neuro', 'v2', 'witch'] },
    { src: 'neuro-images/neurosleeping-2.png', tags: ['neuro', 'v3', 'sleep'] },
    { src: 'neuro-images/neuroV3frog-1.png', tags: ['neuro', 'v3', 'frog'] },
    { src: 'neuro-images/evilV2dress-3.png', tags: ['evil', 'v2', 'dress'] },
    { src: 'neuro-images/neuroV3short-2.png', tags: ['evil', 'v3', 'short', 'frog'] },
    { src: 'neuro-images/evilsleeping-1.png', tags: ['evil', 'v2', 'sleep'] },
    { src: 'neuro-images/evilV2-3.png', tags: ['evil', 'v2', 'dress'] },
    { src: 'neuro-images/evilV2dress-3.png', tags: ['evil', 'v2', 'dress'] },
    { src: 'neuro-images/neurobread-1.png', tags: ['neuro', 'bread'] },
    { src: 'neuro-images/neuroV3cat-1.png', tags: ['neuro', 'v3', 'cat'] },
    { src: 'neuro-images/neurobread-2.png', tags: ['neuro', 'bread'] },
    { src: 'neuro-images/neuroV2clown-1.png', tags: ['neuro', 'v2', 'clown'] },
    { src: 'neuro-images/neuroV2clown-3.png', tags: ['neuro', 'v2', 'clown'] }
];

// 获取搜索框和画廊容器
const tagSearch = document.getElementById('tagSearch');
const gallery = document.getElementById('gallery');

// 函数：加载并显示所有图片
function loadImages() {
    // 清空画廊
    gallery.innerHTML = '';
    
    // 遍历所有图片数据并创建图片元素
    imageData.forEach((image) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        imageDiv.setAttribute('data-tags', image.tags.join(', ')); // 使用逗号分隔的标签

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Loading...';

        imageDiv.appendChild(img);
        gallery.appendChild(imageDiv);
    });
}

// 监听标签搜索框的输入事件
tagSearch.addEventListener('input', function() {
    const query = tagSearch.value.toLowerCase(); // 获取搜索框中的查询
    const images = document.querySelectorAll('.image'); // 获取所有图片元素
    
    images.forEach(image => {
        const tags = image.getAttribute('data-tags').toLowerCase(); // 获取每张图片的标签
        if (tags.includes(query)) {
            image.style.display = 'block'; // 显示匹配的图片
        } else {
            image.style.display = 'none'; // 隐藏不匹配的图片
        }
    });
});

// 初始化加载图片
loadImages();
