window.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.navigation-li a');

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
        navigation.classList.toggle('bgColor', window.scrollY > 0)
    })
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('menu-btn__toggle');
        navigation.classList.toggle('active');
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('menu-btn__toggle');
            navigation.classList.remove('active');
        })
    })
})