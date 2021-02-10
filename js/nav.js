const navbar = document.querySelector('.nav-bar');
const whiteLogo = document.querySelector('.white-logo');
const blackLogo = document.querySelector('.black-logo');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        whiteLogo.style.display = "none"
        blackLogo.style.display = "block"


    } else {
        navbar.classList.remove('nav-active');
        whiteLogo.style.display = "block"
        blackLogo.style.display = "none"






    }

};

// window.onscroll = () => {
//     if (window.scrollY > 100) {
//         nav
//     }
// }
