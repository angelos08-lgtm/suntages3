// Φόρτωση του layout
fetch('partials/layout.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('layout1').innerHTML = html;

    // Φόρτωση του layout JS
    const script = document.createElement('script');
    script.src = 'partials/layout_script.js';
    document.body.appendChild(script);

    // Εισαγωγή περιεχομένου συνταγής Δίπλες
    requestAnimationFrame(() => {
      const main = document.getElementById('content');
      main.innerHTML = `
<article class="container" aria-labelledby="title">
  <header>
    <h1 id="titlearticle">Δίπλες</h1>
    <p class="lead">Τραγανές, μυρωδάτες δίπλες με μέλι και καρύδι — το απόλυτο γλυκό των γιορτών!</p>
    <div class="meta">Προετοιμασία: ~40 λεπτά • Τηγάνισμα: 20 λεπτά • Μερίδες: 25–30 δίπλες</div>
  </header>

  <section class="section" aria-labelledby="ingredients-heading">
    <h2 id="ingredients-heading">Υλικά</h2>
    <ul class="ingredients">
      <li data-preview="eggPreview">5 αυγά</li>
      <li data-preview="saltPreview">1 πρέζα αλάτι</li>
      <li data-preview="sugarPreview">2 κουτ. σούπας ζάχαρη</li>
      <li data-preview="vinegarPreview">1 κουτ. γλυκού ξύδι</li>
      <li data-preview="flourPreview">~500 γρ. αλεύρι (όσο πάρει)</li>
      <li data-preview="oilPreview">Λάδι για τηγάνισμα</li>
      <li data-preview="syrupPreview">Για το σιρόπι: μέλι – ζάχαρη – νερό – κανέλα</li>
      <li data-preview="nutsPreview">Για το πασπάλισμα: καρύδια ψιλοκομμένα, κανέλα</li>
    </ul>
  </section>

  <section class="section" aria-labelledby="method-heading">
    <h2 id="method-heading">Εκτέλεση</h2>
    <ol class="steps">
      <li>Χτυπάς καλά τα αυγά με τη ζάχαρη και προσθέτεις το ξύδι και το αλάτι.</li>
      <li>Ρίχνεις σταδιακά το αλεύρι μέχρι να γίνει ζύμη μαλακή και ελαστική.</li>
      <li>Αφήνεις τη ζύμη να ξεκουραστεί για 20 λεπτά.</li>
      <li>Ανοίγεις πολύ λεπτό φύλλο και το κόβεις σε λωρίδες ή παραλληλόγραμμα.</li>
      <li>Ζεσταίνεις το λάδι και τηγανίζεις κάθε κομμάτι — καθώς ψήνεται το τυλίγεις γύρω από μια πιρούνα για να πάρει το κλασικό σχήμα της δίπλας.</li>
      <li>Βράζεις για 2 λεπτά το νερό, τη ζάχαρη και την κανέλα. Κλείνεις τη φωτιά και προσθέτεις το μέλι.</li>
      <li>Βουτάς τις ζεστές δίπλες στο χλιαρό σιρόπι.</li>
      <li>Τις πασπαλίζεις με καρύδια και κανέλα.</li>
    </ol>
    <p class="note">Αν θες πιο τραγανές δίπλες, άφησε τη ζύμη ακόμα λεπτότερη πριν το τηγάνισμα.</p>
  </section>
</article>

<!-- Προεπισκοπήσεις εικόνων -->
<div id="eggPreview" class="ingredient-preview"></div>
<div id="saltPreview" class="ingredient-preview"></div>
<div id="sugarPreview" class="ingredient-preview"></div>
<div id="vinegarPreview" class="ingredient-preview"></div>
<div id="flourPreview" class="ingredient-preview"></div>
<div id="oilPreview" class="ingredient-preview"></div>
<div id="syrupPreview" class="ingredient-preview"></div>
<div id="nutsPreview" class="ingredient-preview"></div>
      `;

      // ==========================
      //  IMAGE PREVIEW SCRIPT
      // ==========================
      const previews = {
        eggPreview: "https://cdn.onmmd.gr/img/1200/675/85/2018/05/08/ayga.jpg?t=axQzSda4cpsMI88kvxpgmw",
        saltPreview: "https://www.shutterstock.com/shutterstock/videos/1110331523/thumb/1.jpg?ip=x480",
        sugarPreview: "https://cdn.pixabay.com/photo/2017/02/22/16/06/brown-sugar-2089033_1280.jpg",
        vinegarPreview: "https://cdn.pixabay.com/photo/2018/04/18/18/56/vinegar-3337450_1280.jpg",
        flourPreview: "https://cdn.pixabay.com/photo/2017/09/19/21/57/flour-2768812_1280.jpg",
        oilPreview: "https://cdn.pixabay.com/photo/2017/08/10/08/37/sunflower-oil-2617493_1280.jpg",
        syrupPreview: "https://cdn.pixabay.com/photo/2017/06/07/10/40/honey-2380904_1280.jpg",
        nutsPreview: "https://cdn.pixabay.com/photo/2017/01/11/18/56/walnuts-1976454_1280.jpg"
      };

document.querySelectorAll(".ingredients li").forEach(item => {
  const previewId = item.getAttribute("data-preview");
  const previewDiv = document.getElementById(previewId);
  if (!previewDiv) return;

  // Ρύθμιση εικόνας
  previewDiv.style.backgroundImage = `url(${previews[previewId]})`;

  // Εμφάνιση / Απόκρυψη με animation
  item.addEventListener("mouseenter", () => { previewDiv.classList.add('show'); });
  item.addEventListener("mouseleave", () => { previewDiv.classList.remove('show'); });
});


    }); // requestAnimationFrame
  })
  .catch(err => console.error('Σφάλμα φόρτωσης layout:', err));

