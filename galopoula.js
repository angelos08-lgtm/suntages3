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
  <h1 id="titlearticle">Γαλοπούλα Γεμιστή</h1>
  <p class="lead">Η απόλυτη γιορτινή γαλοπούλα — ζουμερή, αρωματική και γεμισμένη με κάστανα, κουκουνάρι και σταφίδες.</p>
  <div class="meta">Προετοιμασία: 40 λεπτά • Ψήσιμο: 3 ώρες • Μερίδες: 8–10 άτομα</div>
</header>

<section class="section" aria-labelledby="ingredients-heading">
  <h2 id="ingredients-heading">Υλικά</h2>

  <ul class="ingredients">
    <li>1 γαλοπούλα ~4–5 κιλά</li>
    <li>3 κουτ. σούπας βούτυρο</li>
    <li>Αλάτι, πιπέρι</li>
    <li>1 κρεμμύδι ψιλοκομμένο</li>
    <li>500 γρ. κιμάς μοσχαρίσιος</li>
    <li>1/2 φλ. κουκουνάρι</li>
    <li>1/2 φλ. σταφίδες</li>
    <li>10–12 κάστανα βρασμένα & καθαρισμένα</li>
    <li>1/2 φλ. λευκό κρασί</li>
    <li>2 φλ. ρύζι καρολίνα</li>
    <li>2 φλ. νερό ή ζωμός</li>
    <li>Χυμός από 1 πορτοκάλι</li>
  </ul>
</section>

<section class="section" aria-labelledby="method-heading">
  <h2 id="method-heading">Εκτέλεση</h2>

  <ol class="steps">
    <li>Πλένεις και στεγνώνεις καλά τη γαλοπούλα. Αλατοπιπερώνεις εξωτερικά και εσωτερικά.</li>
    <li>Σε βαθύ τηγάνι σοτάρεις κρεμμύδι και κιμά μέχρι να ροδίσουν.</li>
    <li>Προσθέτεις κουκουνάρι, σταφίδες και κάστανα. Σβήνεις με λευκό κρασί.</li>
    <li>Ρίχνεις το ρύζι και ανακατεύεις για 1–2 λεπτά.</li>
    <li>Προσθέτεις τον ζωμό, χαμηλώνεις τη φωτιά και αφήνεις 10 λεπτά να πιει τα υγρά.</li>
    <li>Γεμίζεις τη γαλοπούλα και τη ράβεις ή τη στερεώνεις με οδοντογλυφίδες.</li>
    <li>Αλείφεις το δέρμα με το βούτυρο.</li>
    <li>Ψήνεις στους 180°C για περίπου 3 ώρες, σκεπασμένη με αλουμινόχαρτο.</li>
    <li>Την τελευταία ώρα αφαιρείς το αλουμινόχαρτο να πάρει χρώμα.</li>
    <li>Περιχύνεις με χυμό πορτοκαλιού για άρωμα και έξτρα γυαλάδα.</li>
  </ol>

  <p class="note">Αν η γαλοπούλα σου είναι μεγαλύτερη, πρόσθεσε περίπου +30 λεπτά ψήσιμο ανά κιλό.</p>
</section>
</article>

     <div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/VTeLIu_k970?si=MF6lvyHzUhodGtN5" 
    title="YouTube video player" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
      `;
    }); // requestAnimationFrame
  }); // fetch then




