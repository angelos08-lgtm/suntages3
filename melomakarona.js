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
    <h1 id="titlearticle">Μελομακάρονα</h1>
    <p class="lead">Αρωματικά, ζουμερά μελομακάρονα με μέλι και καρύδι.</p>
    <div class="meta">Προετοιμασία: ~30 λεπτά • Ψήσιμο: 20–25 λεπτά • Μερίδες: περίπου 40</div>
  </header>

  <section class="section" aria-labelledby="ingredients-heading">
    <h2 id="ingredients-heading">Υλικά</h2>
    <ul class="ingredients">
      <li>1 φλ. ελαιόλαδο</li>
      <li>1/2 φλ. σπορέλαιο</li>
      <li>1/2 φλ. ζάχαρη</li>
      <li>1/2 φλ. φρέσκο χυμό πορτοκαλιού</li>
      <li>Ξύσμα από 1 πορτοκάλι</li>
      <li>1/4 φλ. κονιάκ (ή άλλο αρωματικό λικέρ)</li>
      <li>1 κουτ. γλυκού σόδα</li>
      <li>1 κουτ. γλυκού κανέλα</li>
      <li>1/2 κουτ. γλυκού γαρίφαλο</li>
      <li>~900 γρ. αλεύρι για όλες τις χρήσεις</li>
      <li>1 κουτ. γλυκού μπέικιν πάουντερ</li>
      <li>Για το σιρόπι: 1 φλ. μέλι, 1 φλ. ζάχαρη, 1 φλ. νερό, 1 ξυλάκι κανέλας</li>
      <li>Για το πασπάλισμα: καρύδι χοντροκομμένο</li>
    </ul>
  </section>

  <section class="section" aria-labelledby="method-heading">
    <h2 id="method-heading">Εκτέλεση</h2>
    <ol class="steps">
      <li>Προθερμαίνεις τον φούρνο στους 170°C και στρώνεις τα ταψιά με λαδόκολλα.</li>
      <li>Σε μπολ ανακατεύεις ελαιόλαδο, σπορέλαιο, ζάχαρη, χυμό πορτοκαλιού, ξύσμα και κονιάκ.</li>
      <li>Ρίχνεις τη σόδα και ανακατεύεις ώστε να αφρίσει μέσα στο μείγμα.</li>
      <li>Κοσκινίζεις αλεύρι, μπέικιν, κανέλα και γαρίφαλο. Προσθέτεις σταδιακά μέχρι να σχηματιστεί εύπλαστη αλλά μαλακή ζύμη.</li>
      <li>Πλάθεις μικρά οβάλ μελομακάρονα και τα πιέζεις ελαφρά με ένα πιρούνι να σχηματίσουν σχέδιο.</li>
      <li>Ψήνεις 20–25 λεπτά μέχρι να ροδίσουν.</li>
      <li>Βράζεις για 2–3 λεπτά το νερό με τη ζάχαρη και την κανέλα. Κλείνεις τη φωτιά και προσθέτεις το μέλι.</li>
      <li>Βουτάς τα ζεστά μελομακάρονα στο χλιαρό σιρόπι για 5–10 δευτερόλεπτα το καθένα.</li>
      <li>Τα τοποθετείς σε πιατέλα και τα πασπαλίζεις με καρύδι.</li>
    </ol>
    <p class="note">Μπορείς να τα κάνεις ακόμη πιο αρωματικά προσθέτοντας λίγο μέλι και στη ζύμη.</p>
  </section>
</article>

     <div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/I2iYWTkHx5I?si=EvtFmwgReZiITbYp" 
    title="YouTube video player" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
      `;
    }); // requestAnimationFrame
  }); // fetch then



