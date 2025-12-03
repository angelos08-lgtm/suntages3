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

    // -------------------- Περιεχόμενο home -------------------- //
    const main = document.getElementById('content');
    main.innerHTML = `
      <!-- Κύριο SLIDER -->
      <div class="slider poke-slider" id="mainSlider">
        <div class="slides-wrapper"></div>
        <button class="prev">❮</button>
        <button class="next">❯</button>
        <div class="dots"></div>
      </div>

      <!-- STORIES -->
      <div class="story-block" data-target="extra1">
        <h3>Κουραμπιέδες</h3>
        <p>Οι κουραμπιέδες έχουν ρίζες στη Μικρά Ασία...</p>
      </div>
      <div id="extra1" class="story-extra">
  <p>Οι κουραμπιέδες έχουν τις ρίζες τους στη Μικρά Ασία, όπου γλυκίσματα με βούτυρο και ξηρούς καρπούς ήταν σύμβολο φιλοξενίας και γιορτής. 
    Μετά τη Μικρασιατική καταστροφή, η συνταγή ταξίδεψε στην Ελλάδα μαζί με τις προσφυγικές οικογένειες.<br>
    Το άρωμα του φρέσκου βουτύρου, τα καβουρδισμένα αμύγδαλα και η πλούσια άχνη δημιουργούν ένα γλυκό που συνδέθηκε άμεσα με τα Χριστούγεννα. 
    Σε πολλές περιοχές, μάλιστα, οι κουραμπιέδες θεωρούνταν γλυκό καλής τύχης, και το πρώτο ταψί ψηνόταν παραμονή Χριστουγέννων “για το καλό του σπιτιού”.</p>

        <!-- SLIDER Κουραμπιέδες -->
        <div class="story-slider" id="slider-kourampiedes">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>

      <div class="story-block" data-target="extra2">
        <h3>Μελομακάρονα</h3>
        <p>Προέρχονται από τα αρχαία «μακαρωνία»...</p>
      </div>
      <div id="extra2" class="story-extra">
          <p>Τα μελομακάρονα έχουν πολύ βαθιά ιστορία. Η αρχαία ρίζα τους είναι τα “μακαρώνια” — τελετουργικές προσφορές σε τελετές και μνημόσυνα, φτιαγμένες από αλεύρι, λάδι και μέλι· 
        το μέλι συμβόλιζε την ευλογία και την αιωνιότητα. <br> 
        Με τα χρόνια η συνταγή εξελίχθηκε, απέκτησε καρύδια, κανέλα, πορτοκάλι και ψήσιμο στον φούρνο. 
        Στη Βυζαντινή περίοδο εμφανίστηκε το “μακαρόνιον”, ένα γλυκό πολύ κοντά στη σημερινή μορφή. 
        Τελικά επικράτησε ως χριστουγεννιάτικο έδεσμα γιατί το λάδι (αντί βουτύρου) ταίριαζε με τις νηστίσιμες ημέρες πριν τις γιορτές. <br>
        Έτσι, κατέληξαν το πιο μυρωδάτο χριστουγεννιάτικο γλυκό της Ελλάδας.</p>

        <!-- SLIDER Μελομακάρονα -->
        <div class="story-slider" id="slider-melomakarona">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>

      <div class="story-block" data-target="extra3">
        <h3>Δίπλες</h3>
        <p>Σύμβολο χαράς και καλοτυχίας...</p>
      </div>
      <div id="extra3" class="story-extra">
        <p>Οι δίπλες είναι βαθιά συνδεδεμένες με την Πελοπόννησο, όπου παραδοσιακά φτιάχνονταν όχι μόνο τα Χριστούγεννα, αλλά και σε γάμους και βαφτίσια. 
        Το όνομά τους προέρχεται από το τύλιγμα (“δίπλωμα”) του φύλλου την ώρα που τηγανίζεται. Το μέλι συμβολίζει τη γλυκύτητα και την ευλογία, ενώ το καρύδι τη γονιμότητα και την αφθονία. <br>
        Στα χωριά πίστευαν ότι όσο πιο πολλές δίπλες “πετύχαιναν”, τόσο καλύτερη χρονιά θα είχαν. Γι’ αυτό το γλυκό τους έμεινε μέχρι σήμερα ως σύμβολο χαράς και καλοτυχίας.</p>

        <!-- SLIDER Δίπλες -->
        <div class="story-slider" id="slider-diples">
          <div class="slides-wrapper"></div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
          <div class="dots"></div>
        </div>
      </div>
    `;

    // Αρχικοποίηση STORIES
    initStoryBlocks();

    // Αρχικοποίηση SLIDERS
    initAllSliders();
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));

// -------------------- STORIES FUNCTION -------------------- //
function initStoryBlocks() {
  document.querySelectorAll(".story-block").forEach(block => {
    block.addEventListener("click", () => {
      const targetId = block.getAttribute("data-target");
      const extra = document.getElementById(targetId);
      if (!extra) return;

      extra.classList.toggle("open");
    });
  });
}

// -------------------- Γενική συνάρτηση για slider -------------------- //
function initSliderById(sliderId, images) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

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
    if (idx === 0) img.classList.add('active');
    wrapper.appendChild(img);
    slides.push(img);

    const dot = document.createElement('button');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(idx));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  function setActive(idx) {
    slides[current].classList.remove('active');
    slides[idx].classList.add('active');
    dots[current].classList.remove('active');
    dots[idx].classList.add('active');
    current = idx;
  }

  function nextSlide() { setActive((current + 1) % slides.length); }
  function prevSlide() { setActive((current - 1 + slides.length) % slides.length); }
  function goTo(idx) { setActive(idx); restartAutoplay(); }

  function startAutoplay() { stopAutoplay(); autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY); }
  function stopAutoplay() { if (autoplayInterval) clearInterval(autoplayInterval); }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }

  // Buttons
  nextBtn.addEventListener('click', () => { nextSlide(); restartAutoplay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); restartAutoplay(); });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let startX = 0;
  let isDragging = false;
  slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; isDragging = true; stopAutoplay(); });
  slider.addEventListener('touchend', e => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    isDragging = false;
    startAutoplay();
  });

  startAutoplay();
}

// -------------------- Αρχικοποίηση όλων των sliders -------------------- //
function initAllSliders() {
  // Κύριο slider
  initSliderById('mainSlider', [
    "https://dimitriosmakriniotis.gr/wp-content/uploads/2022/11/ARS06487-scaled.jpeg",
    "https://www.gastronomos.gr/wp-content/uploads/2023/12/melomakarona-stani-gastronomos-610x762.jpg?v=1702468541",
    "https://akispetretzikis.com/photos/180489/diples-7-10-24-site.jpg"
  ]);

  // Sliders γλυκών
  initSliderById('slider-kourampiedes', [
    "https://www.gastronomos.gr/wp-content/uploads/2024/11/kourambiedes-mpenakh-gastronomos-610x762.jpg?v=1733145046",
    "εικόνα2_κουραμπιέ.jpg",
    "εικόνα3_κουραμπιέ.jpg"
  ]);

  initSliderById('slider-melomakarona', [
    "εικόνα1_μελομακάρονο.jpg",
    "εικόνα2_μελομακάρονο.jpg",
    "εικόνα3_μελομακάρονο.jpg"
  ]);

  initSliderById('slider-diples', [
    "εικόνα1_δίπλα.jpg",
    "εικόνα2_δίπλα.jpg",
    "εικόνα3_δίπλα.jpg"
  ]);
}

