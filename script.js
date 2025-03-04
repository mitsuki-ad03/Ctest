document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".comic-container");
    const images = ["1.png", "2.png", "3.png"]; // 実際に存在する画像をリスト化

    images.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "漫画ページ";
        img.classList.add("comic-image");
        container.appendChild(img);
    });
});
