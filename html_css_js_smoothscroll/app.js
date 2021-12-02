const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// show active menu when scrolling
const highlightMenu = () => {
    // get menu item
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')

    let scrollPos = window.scrollY

    // add highlight class to menu item
    if(window.innerWidth > 960) {
        if(scrollPos < 600) {
            homeMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        } else if(scrollPos < 1400) {
            homeMenu.classList.remove('highlight')
            aboutMenu.classList.add('highlight')
            servicesMenu.classList.remove('highlight')
            return
        } else if(scrollPos < 2345) {
            aboutMenu.classList.remove('highlight')
            servicesMenu.classList.add('highlight')
            return
        } 
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu)

// close mobile menu when clicking menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

