// ----------- Επιλογή στοιχείων ----------- //
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');

// ----------- Άνοιγμα / Κλείσιμο μενού ----------- //
menuButton.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

// Κλείσιμο μενού όταν πατάς έξω
document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && e.target !== menuButton) {
    sideMenu.classList.remove('open');
  }
});

// Κλείσιμο μενού με το πλήκτρο Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    sideMenu.classList.remove('open');
  }
});





document.querySelectorAll(".submenu-toggle").forEach(btn => {
  // αποθηκεύουμε το βασικό text του κουμπιού
  const baseText = btn.textContent.replace(/▼|▲/g, "").trim(); // π.χ. "Γλυκά" ή "Φαγητά"

  btn.addEventListener("click", () => {
    const submenu = btn.nextElementSibling;
    if (!submenu) return;

    // toggle submenu
    submenu.classList.toggle("open");

    // μόνο βελάκι αλλάζει
    btn.textContent = baseText + (submenu.classList.contains("open") ? " ▲" : " ▼");
  });
});



