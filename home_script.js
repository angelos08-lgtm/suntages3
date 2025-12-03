// -------------------- Φόρτωση layout -------------------- //
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    // Βάζουμε το layout στο div#layout1
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // -------------------- Βάζουμε περιεχόμενο home -------------------- //
    const main = document.getElementById('content');
    main.innerHTML = `
      <!-- SLIDER -->
      <div class="slider poke-slider">
        <div class="slides-wrapper"></div>
        <button class="prev" aria-label="Previous slide">❮</button>
        <button class="next" aria-label="Next slide">❯</button>
        <div class="dots"></div>
      </div>

      <!-- STORIES -->
<div class="story-block">
  <button class="story-toggle">Κουραμπιέδες</button>
  <div class="story-extra">
    Οι κουραμπιέδες έχουν ρίζες στη Μικρά Ασία και έγιναν σύμβολο των ελληνικών Χριστουγέννων.
  </div>
</div>

<div class="story-block">
  <button class="story-toggle">Μελομακάρονα</button>
  <div class="story-extra">
    Προέρχονται από τα αρχαία «μακαρωνία» και συνδέονται με τελετουργικές γιορτές.
  </div>
</div>

<div class="story-block">
  <button class="story-toggle">Δίπλες</button>
  <div class="story-extra">
    Σύμβολο χαράς και καλοτυχίας, παραδοσιακό γλυκό της Πελοποννήσου.
  </div>
</div>


    `;

    // Αρχικοποίηση slider
    initSlider();
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));


// -------------------- Slider JS -------------------- //
function initSlider() {
  const images = [
    "https://dimitriosmakriniotis.gr/wp-content/uploads/2022/11/ARS06487-scaled.jpeg",
    "https://www.gastronomos.gr/wp-content/uploads/2023/12/melomakarona-stani-gastronomos-610x762.jpg?v=1702468541",
    "https://akispetretzikis.com/photos/180489/diples-7-10-24-site.jpg"
  ];

  const slider = document.querySelector('.poke-slider');
  const wrapper = slider.querySelector('.slides-wrapper');
  const dotsContainer = slider.querySelector('.dots');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let current = 0;
  const slides = [];
  const dots = [];
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 3500;

  // Δημιουργία εικόνων & dots
  images.forEach((src, idx) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Slide ${idx+1}`;
    if(idx === 0) img.classList.add('active');
    wrapper.appendChild(img);
    slides.push(img);

    const dot = document.createElement('button');
    if(idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(idx));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  function setActive(idx) {
    if(idx === current) return;

    slides[current].classList.remove('active');
    slides[idx].classList.add('active');

    dots[current].classList.remove('active');
    dots[idx].classList.add('active');

    current = idx;
  }

  function nextSlide() { setActive((current+1) % slides.length); }
  function prevSlide() { setActive((current-1+slides.length) % slides.length); }
  function goTo(idx) { setActive(idx); restartAutoplay(); }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if(autoplayInterval) clearInterval(autoplayInterval);
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Events
  nextBtn.addEventListener('click', () => { nextSlide(); restartAutoplay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); restartAutoplay(); });
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let startX = 0;
  let isDragging = false;

  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  });

  slider.addEventListener('touchmove', e => {
    if(!isDragging) return;
  });

  slider.addEventListener('touchend', e => {
    if(!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if(deltaX > 50) prevSlide();
    else if(deltaX < -50) nextSlide();
    isDragging = false;
    startAutoplay();
  });

  startAutoplay();
}



