let index = 0;
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});
