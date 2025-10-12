// ================================
//  SCRIPT GLOBAL – L'univers de Lorie
//  Fonctions : Menu burger + Effet "reveal" au scroll
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // ----- MENU BURGER -----
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("navMenu");

  if (burger && nav) {
    const toggleMenu = () => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    };

    // Clic ou touche "Entrée"
    burger.addEventListener("click", toggleMenu);
    burger.addEventListener("keypress", (e) => {
      if (e.key === "Enter") toggleMenu();
    });

    // Fermer le menu quand on clique sur un lien (mobile)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }

  // ----- EFFET REVEAL (apparition au scroll) -----
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length > 0) {
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    };

    // Détection initiale + sur scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // pour afficher directement les éléments déjà visibles
  }
});
