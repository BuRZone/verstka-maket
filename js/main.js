document.addEventListener('DOMContentLoaded', function () {
    var readMoreBtn = document.querySelector('.main__readmore');
    var secondaryText = document.querySelector('.main__text--secondary');
    if (readMoreBtn && secondaryText) {
        readMoreBtn.addEventListener('click', function () {
            secondaryText.style.display = 'block';
            secondaryText.style.maxHeight = 'none';
            secondaryText.style.whiteSpace = 'normal';
            secondaryText.style.overflow = 'visible';
            readMoreBtn.style.display = 'none';
        });
    }

    var burger = document.querySelector('.header__burger');
    var menu = document.getElementById('header-menu');
    if (burger && menu) {
        burger.addEventListener('click', function () {
            var isOpen = menu.getAttribute('aria-hidden') === 'false';
            menu.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        });
    }

    function updateDivider() {
        var headerLeft = document.querySelector('.header__left');
        var burger = document.querySelector('.header__burger');
        var logo = document.querySelector('.header__logo');
        var divider = document.querySelector('.header__divider');
        if (!headerLeft || !burger || !logo) return;
        if (divider) divider.remove();
        var width = window.innerWidth;
        if (width <= 480) {
            var newDivider = document.createElement('div');
            newDivider.className = 'header__divider';
            logo.after(newDivider);
        } else if (width >= 481 && width < 1120) {
            var newDivider = document.createElement('div');
            newDivider.className = 'header__divider';
            burger.after(newDivider);
        }
    }
    window.addEventListener('resize', updateDivider);
    updateDivider();
}); 