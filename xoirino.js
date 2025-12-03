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
  <h1 id="titlearticle">Χοιρινό Φούρνου με Πορτοκάλι και Μυρωδικά</h1>
  <p class="lead">Ζουμερό χοιρινό με τραγανό δέρμα, αρωματισμένο με πορτοκάλι, σκόρδο και φρέσκα μυρωδικά — ιδανικό για γιορτινό τραπέζι.</p>
  <div class="meta">Προετοιμασία: 20 λεπτά • Ψήσιμο: 2 ώρες • Μερίδες: 6–8 άτομα</div>
</header>

<section class="section" aria-labelledby="ingredients-heading">
  <h2 id="ingredients-heading">Υλικά</h2>

  <ul class="ingredients">
    <li>1 κιλό χοιρινό μπούτι ή ωμοπλάτη με πέτσα</li>
    <li>2 κουτ. σούπας ελαιόλαδο</li>
    <li>Αλάτι, φρεσκοτριμμένο πιπέρι</li>
    <li>3 σκελίδες σκόρδο, ψιλοκομμένες</li>
    <li>1 πορτοκάλι (χυμός και ξύσμα)</li>
    <li>1/2 φλ. λευκό κρασί</li>
    <li>1 κουτ. γλυκού θυμάρι φρέσκο ή 1/2 κουτ. γλυκού ξερό</li>
    <li>1 κουτ. γλυκού δεντρολίβανο ψιλοκομμένο</li>
    <li>1 κουτ. γλυκού πάπρικα γλυκιά</li>
  </ul>
</section>

<section class="section" aria-labelledby="method-heading">
  <h2 id="method-heading">Εκτέλεση</h2>

  <ol class="steps">
    <li>Προθερμαίνεις τον φούρνο στους 180°C.</li>
    <li>Κάνεις μικρές χαρακιές στο δέρμα του χοιρινού και αλείφεις με αλάτι, πιπέρι και ελαιόλαδο.</li>
    <li>Σε ένα μπολ ανακατεύεις το σκόρδο, το θυμάρι, το δεντρολίβανο, την πάπρικα, το χυμό και το ξύσμα πορτοκαλιού.</li>
    <li>Αλείφεις καλά το χοιρινό με το μείγμα και αφήνεις να μαριναριστεί για 20–30 λεπτά (ή όλη νύχτα στο ψυγείο για πιο έντονη γεύση).</li>
    <li>Τοποθετείς το χοιρινό σε ταψί, περιχύνεις με το κρασί και σκεπάζεις με αλουμινόχαρτο.</li>
    <li>Ψήνεις περίπου 1,5 ώρα σκεπασμένο και μετά αφαιρείς το αλουμινόχαρτο για να ροδίσει η πέτσα για ακόμα 30 λεπτά.</li>
    <li>Κατά τη διάρκεια του ψησίματος περιχύνεις με τα ζουμιά του ταψιού για να μείνει ζουμερό.</li>
    <li>Βγάζεις το χοιρινό από τον φούρνο και αφήνεις να σταθεί 10 λεπτά πριν το κόψεις σε φέτες.</li>
  </ol>

  <p class="note">Σερβίρετε με ψητά λαχανικά ή πουρέ για ένα πλήρες γιορτινό γεύμα.</p>
</section>
</article>

<div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/3BM7hoGjQxc" 
    title="YouTube video player" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>

      `;
    }); // requestAnimationFrame
  }); // fetch then



