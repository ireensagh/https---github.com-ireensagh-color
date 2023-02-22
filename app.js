const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu
const mobileMenu = () => {
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {
    const elm = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const abt = document.querySelector('#about-page');
    const srv = document.querySelector('#services-page');

    let scrollPos = window.scrollY;

    // console.log(scrollPos);

    // adds the 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        abt.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        abt.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        srv.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        srv.classList.add('highlight');
        abt.classList.remove('highlight');
        return;
    }

    if (elm && window.innerWidth > 960 && scrollPos < 600) {
        elm.lastChild.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


//mobile closing

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('cllick', hideMobileMenu);

navLogo.addEventListener('cllick', hideMobileMenu);