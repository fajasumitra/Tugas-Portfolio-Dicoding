const hamburgerButton = document.querySelector('.hamburger-link');
const asideElement = document.querySelector('.aside');

hamburgerButton.addEventListener('click', () => {
    asideElement.classList.toggle('active');
});