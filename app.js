const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const main = document.querySelector('.main');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(links => {
    links.classList.toggle('fade')
  })
  main.classList.toggle('remove')
})

