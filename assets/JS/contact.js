// ----- Effet Parallax -----
document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector('.background-parallax');
  if (bg) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const headerHeight = document.querySelector('header').offsetHeight;
      const footerOffset = document.querySelector('footer').offsetTop;

      const maxTranslate = footerOffset - headerHeight - bg.offsetHeight;
      // Parallax léger : diviser le scroll pour effet fluide
      let translateY = scrollTop * 0.3;

      if (translateY > maxTranslate) translateY = maxTranslate;
      if (translateY < 0) translateY = 0;

      bg.style.transform = `translateY(${translateY}px)`;
    });
  }

  // ----- Animation au scroll (titre, formulaire, infos) -----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 👈 on arrête d'observer après apparition
        }
      });
    },
    { threshold: 0.2 } // 👈 20% visible pour déclencher l'animation
  );

  // ✅ Observer les sections principales
  document.querySelectorAll(".page-title, .contact-box, .contact-info, .contact-section").forEach(el => {
    observer.observe(el);
  });
});
