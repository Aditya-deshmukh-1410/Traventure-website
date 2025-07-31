/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER HOME ===============*/

const swiperHome = new Swiper('.home__swiper',{
    loop: true,
    slidesPerView: 'auto',
    grabCurser: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay:{
        delay:2500,  //change this later!!
        disableOnInteraction: false,
    }
})
/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)


/*=============== SWIPER TESTIMONIAL ===============*/

const swiperTestimonial = new Swiper('.testimonial__swiper',{
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    grabCurser: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay:{
        delay:2500,  //change this later!!
        disableOnInteraction: false,
    }
})

/*=============== SHOW SCROLL UP ===============*/ 

// const scrollUp =()=>{
//     const scrollUp = document.getElementById('scroll-up')
//     window.scrollY >= 350
//     ?scrollUp.classList.add('show-scroll')
//     :scrollUp.classList.remove('show-scroll')
// }

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  if (scrollUp) {
    window.scrollY >= 350
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll');
  }
};

// Call on scroll
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/