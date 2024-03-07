let anime = document.querySelectorAll(".goShop");

anime.forEach((anime) => {
    anime.addEventListener('mouseenter', () => {
        anime.style.transform = `translateX(${-2}rem)`;
    });

    anime.addEventListener('mouseleave', () => {
        anime.style.transform = '';
    });
});