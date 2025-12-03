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
      <div class="story-block" data-target="extra1">
        <h3>Κουραμπιέδες</h3>
        <p>Οι κουραμπιέδες έχουν ρίζες στη Μικρά Ασία...</p>
      </div>

      <div id="extra1" class="story-extra">
        <p>Αυτό είναι το πλήρες επιπλέον κείμενο για τους κουραμπιέδες.</p>
      </div>

      <div class="story-block" data-target="extra2">
        <h3>Μελομακάρονα</h3>
        <p>Προέρχονται από τα αρχαία «μακαρωνία»...</p>
      </div>

      <div id="extra2" class="story-extra">
        <p>Αυτό είναι το πλήρες επιπλέον κείμενο για τα μελομακάρονα.</p>
      </div>

      <div class="story-block" data-target="extra3">
        <h3>Δίπλες</h3>
        <p>Σύμβολο χαράς και καλοτυχίας...</p>
      </div>

      <div id="extra3" class="story-extra">
        <p>Αυτό είναι το πλήρες επιπλέον κείμενο για τις δίπλες.</p>
      </div>
    `;

    // -------------------- Αρχικοποίηση STORIES -------------------- //
    initStoryBlocks();

    // -------------------- Αρχικοποίηση SLIDER -------------------- //
    initSlider();
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));



// -------------------- STORIES FUNCTION -------------------- //
function initStoryBlocks() {
  document.querySelectorAll(".story-block").forEach(block => {
    block.addEventListener("click", () => {
      const targetId = block.getAttribute("data-target");
      const extra = document.getElementById(targetId);

      if (extra) {
        extra.classList.toggle("open");
      }
    });
  });
}



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

  // Buttons
  nextBtn.addEventListener('click', () => { nextSlide(); restartAutoplay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); restartAutoplay(); });

  // Pause on hover
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
