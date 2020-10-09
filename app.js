const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const navLogo = document.querySelector('.nav-logo');
const shoppingBacIconMobile = document.querySelector('.shoppingBagIconMobile');
const subscription = document.querySelector('.subscribe__formContainer');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(links => {
    links.classList.toggle('fade')
  });

  main.classList.toggle('remove');
  footer.classList.toggle('remove');
  navLogo.classList.toggle('remove');
  shoppingBacIconMobile.classList.toggle('remove');
  subscription.classList.toggle('remove');
});

