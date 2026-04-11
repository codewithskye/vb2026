// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // Initialize AOS (ready for future sections)
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      mobileMenu.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Close mobile menu after navigation
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenu.textContent = '☰';
      }
    });
  });
});


// Hero Background Slider with smooth fade + Ken Burns effect
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

let sliderInterval = setInterval(showNextSlide, 5500);

const heroSection = document.querySelector('.hero');

if (heroSection) {
  heroSection.addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
  });

  heroSection.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(showNextSlide, 5500);
  });
}

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S")) {
        e.preventDefault();
    }
    if (e.keyCode === 123) {
        e.preventDefault();
    }
});