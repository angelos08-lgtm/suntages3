// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση του layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Εισαγωγή περιεχομένου Επικοινωνίας στο <main id="content">
    requestAnimationFrame(() => {
      const main = document.getElementById('content');
      main.innerHTML = `
<article class="container" aria-labelledby="title">
<header>
  <h1 id="titlearticle">Κοκκινιστό Μοσχάρι με Κάστανα</h1>
  <p class="lead">Ζουμερό μοσχάρι σε σάλτσα ντομάτας με κάστανα — ιδανικό για ζεστό και χριστουγεννιάτικο γιορτινό τραπέζι.</p>
  <div class="meta">Προετοιμασία: 20 λεπτά • Μαγείρεμα: 2–2,5 ώρες • Μερίδες: 6–8 άτομα</div>
</header>

<section class="section" aria-labelledby="ingredients-heading">
  <h2 id="ingredients-heading">Υλικά</h2>

  <ul class="ingredients">
    <li>1 κιλό μοσχαρίσιο κρέας (σπάλα ή κιλότο), κομμένο σε κύβους</li>
    <li>3 κουτ. σούπας ελαιόλαδο</li>
    <li>1 μεγάλο κρεμμύδι, ψιλοκομμένο</li>
    <li>2–3 σκελίδες σκόρδο, ψιλοκομμένες</li>
    <li>2 φλ. ντομάτα κονκασέ ή πολτό ντομάτας</li>
    <li>1/2 φλ. κόκκινο κρασί</li>
    <li>10–12 βρασμένα και καθαρισμένα κάστανα</li>
    <li>1 κουτ. γλυκού ζάχαρη</li>
    <li>Αλάτι, φρεσκοτριμμένο πιπέρι</li>
    <li>1 κουτ. γλυκού ρίγανη ή θυμάρι</li>
    <li>2 δαφνόφυλλα</li>
    <li>Νερό όσο χρειαστεί για το μαγείρεμα</li>
  </ul>
</section>

<section class="section" aria-labelledby="method-heading">
  <h2 id="method-heading">Εκτέλεση</h2>

  <ol class="steps">
    <li>Ζεσταίνεις το ελαιόλαδο σε μεγάλη κατσαρόλα και σοτάρεις το κρέας μέχρι να ροδίσει ομοιόμορφα.</li>
    <li>Προσθέτεις το κρεμμύδι και το σκόρδο και σοτάρεις για 3–4 λεπτά μέχρι να μαλακώσουν.</li>
    <li>Σβήνεις με το κρασί και αφήνεις 2 λεπτά να εξατμιστεί το αλκοόλ.</li>
    <li>Ρίχνεις την ντομάτα, τη ζάχαρη, τα δαφνόφυλλα και τα μυρωδικά. Αλατοπιπερώνεις.</li>
    <li>Προσθέτεις νερό όσο χρειαστεί για να σκεπαστεί το κρέας. Σιγοβράζεις σε χαμηλή φωτιά για 1,5–2 ώρες μέχρι να μαλακώσει το κρέας.</li>
    <li>Προσθέτεις τα κάστανα 20 λεπτά πριν το τέλος και ανακατεύεις απαλά για να ενσωματωθούν στη σάλτσα.</li>
    <li>Δοκιμάζεις και διορθώνεις αλάτι/πιπέρι. Αποσύρεις από τη φωτιά και αφήνεις να σταθεί 5–10 λεπτά πριν το σερβίρισμα.</li>
  </ol>

  <p class="note">Σερβίρετε με πουρέ πατάτας ή ρύζι για ένα πλήρες γιορτινό γεύμα.</p>
</section>
</article>

<div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video player" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>


      `;
    }); // requestAnimationFrame
  }); // fetch then



