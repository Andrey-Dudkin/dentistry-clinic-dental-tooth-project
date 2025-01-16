const burgerMenuButton = document.querySelector(".burger-menu");
const burgerMenuIcom = document.querySelector(".burger-menu__icon");
const mobileMenu = document.querySelector(".navbar-mobile");

burgerMenuButton.addEventListener("click", () => {
    burgerMenuIcom.classList.toggle("burger-menu__icon-active");
    mobileMenu.classList.toggle("navbar-mobile--active");
});