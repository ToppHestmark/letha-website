const slides = document.querySelectorAll(".slide");
const nextImage = document.querySelector(".next");
const prevImage = document.querySelector(".prev")

// --- Slider ---
let currentSlide = 0;
const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
  })
  slides[n].style.display = "block"
}
document.addEventListener("DOMContentLoaded", init(currentSlide))

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

nextImage.addEventListener('click', next)
prevImage.addEventListener('click', prev)


// --- Dropdown shoe size menu --- //
const dropdown = document.querySelector("#dropdown");
const dropdownContent = document.getElementsByClassName("dropdown-content");

function dropDown() {
  dropdown.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.details__dropdownButton')) {
    let dropdowns = dropdownContent;
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}