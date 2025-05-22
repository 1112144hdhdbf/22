// Скрипт для скрытия шапки при прокрутке вниз и показа при прокрутке вверх/вверх страницы
(function() {
    const header = document.querySelector('.header');
    let lastScroll = window.scrollY;
    let ticking = false;

    function onScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll > 30) {
            header.classList.add('header--hidden');
        } else {
            header.classList.remove('header--hidden');
        }
        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    });
})();
