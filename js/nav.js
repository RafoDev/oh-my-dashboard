"use strict";
const nav = () => {
    const hamburgerMenu = document.querySelector(".header__hamburger-menu");
    const nav = document.querySelector('.nav');
    const body = document.querySelector('.body');
    const navLinkItems = document.querySelectorAll('.nav__link-item');

    const toggleMenu = () => {
        nav.classList.toggle('nav--show');
        navLinkItems.forEach(item => item.classList.toggle('nav__link-item--show'));
        setTimeout(()=>{
            hamburgerMenu.children[0].classList.toggle(
                "header__hamburger-menu-l1--transform"
            );
            hamburgerMenu.children[1].classList.toggle(
                "header__hamburger-menu-l2--transform"
            );
            hamburgerMenu.children[2].classList.toggle(
                "header__hamburger-menu-l3--transform"
            );
        },500);
    };
    hamburgerMenu.addEventListener("click", toggleMenu);
};  

export default nav;
