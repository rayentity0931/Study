function toggleImages(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block"; // 顯示圖片
    } else {
        element.style.display = "none"; // 隱藏圖片
    }
}