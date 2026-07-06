

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

dots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    // Scroll to slide active
    let slideActive = slides[index];
    slideActive.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' })


    // Add selector to dot active
    dots.forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
  });
})