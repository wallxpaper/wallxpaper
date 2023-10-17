document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".image-slider");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // 3 seconds between slides
});

