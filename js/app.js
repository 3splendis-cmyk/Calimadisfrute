// Vitour Calima - JS principal
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const mobileBtn = document.getElementById('mobileBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if(mobileBtn && mobileMenu){
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
  // Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  document.querySelectorAll('section, article, .card-hover').forEach(el => {
    if(!el.classList.contains('reveal')){ el.classList.add('reveal'); obs.observe(el); }
  });

  // Hero slider - 1 botón funcional
  const heroBg = document.getElementById('heroBg');
  const heroImages = [
    'img/hero1.jpg',
    'img/hero2.jpg',
    'img/hero3.jpg'
  ];
  let heroIdx = 0;
  const heroNext = document.getElementById('heroNext');
  if(heroBg && heroNext){
    heroNext.addEventListener('click', () => {
      heroIdx = (heroIdx + 1) % heroImages.length;
      heroBg.style.opacity = '0';
      setTimeout(() => {
        heroBg.src = heroImages[heroIdx];
        heroBg.style.opacity = '1';
      }, 200);
    });
    // Auto slide cada 6s
    setInterval(() => heroNext.click(), 6000);
  }
});
