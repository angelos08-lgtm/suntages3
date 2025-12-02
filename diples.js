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
    <h1 id="titlearticle">Δίπλες</h1>
    <p class="lead">Τραγανές, μυρωδάτες δίπλες με μέλι και καρύδι — το απόλυτο γλυκό των γιορτών!</p>
    <div class="meta">Προετοιμασία: ~40 λεπτά • Τηγάνισμα: 20 λεπτά • Μερίδες: 25–30 δίπλες</div>
  </header>

<section class="section" aria-labelledby="ingredients-heading">
  <h2 id="ingredients-heading">Υλικά</h2>

<ul class="ingredients">
  <li data-img="https://cdn.onmmd.gr/img/1200/675/85/2018/05/08/ayga.jpg?t=axQzSda4cpsMI88kvxpgmw">5 αυγά</li>

<li data-img="https://www.shutterstock.com/shutterstock/videos/1110331523/thumb/1.jpg?ip=x480">1 πρέζα αλάτι</li>

  <li data-img="https://cdn.pixabay.com/photo/2017/02/22/16/06/brown-sugar-2089033_1280.jpg">2 κουτ. σούπας ζάχαρη</li>

  <li data-img="https://cdn.pixabay.com/photo/2018/04/18/18/56/vinegar-3337450_1280.jpg">1 κουτ. γλυκού ξύδι</li>

  <li data-img="https://cdn.pixabay.com/photo/2017/09/19/21/57/flour-2768812_1280.jpg">~500 γρ. αλεύρι (όσο πάρει)</li>

  <li data-img="https://cdn.pixabay.com/photo/2017/08/10/08/37/sunflower-oil-2617493_1280.jpg">Λάδι για τηγάνισμα</li>

  <li data-img="https://cdn.pixabay.com/photo/2017/06/07/10/40/honey-2380904_1280.jpg">Για το σιρόπι: μέλι – ζάχαρη – νερό – κανέλα</li>

  <li data-img="https://cdn.pixabay.com/photo/2017/01/11/18/56/walnuts-1976454_1280.jpg">Για το πασπάλισμα: καρύδια ψιλοκομμένα, κανέλα</li>
</ul>
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

<div id="ingredientPreview"></div>
      `;


const preview = document.getElementById("ingredientPreview");

document.querySelectorAll(".ingredients li").forEach(item => {
  item.addEventListener("mouseenter", () => {
    const img = item.getAttribute("data-img");
    preview.style.backgroundImage = `url(${img})`;  
    preview.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    preview.style.display = "none";
  });
});

      }
    });
  });


