// ----- Modal dynamique -----
document.addEventListener("DOMContentLoaded", () => {
  const recetteModal = document.getElementById("modalRecette");
  if (recetteModal) {
    recetteModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const card = button.closest(".custom-card");

      const title = card.dataset.title || "Recette";
      const recipe = card.dataset.recipe || "Recette en cours d’écriture.";

      let images = [];
      try {
        images = JSON.parse(card.dataset.images || "[]");
      } catch (e) {
        images = [];
      }

      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalRecipe").textContent = recipe;

      const inner = document.getElementById("carouselInner");
      inner.innerHTML = "";

      if (images.length === 0) images = ["images/Photo.png"];

      images.forEach((src, idx) => {
        const item = document.createElement("div");
        item.className = "carousel-item" + (idx === 0 ? " active" : "");
        item.innerHTML = `<img src="${src}" class="d-block w-100 modal-img" alt="${title} - ${idx + 1}">`;
        inner.appendChild(item);
      });
    });
  }

  // ----- Animation au scroll des éléments -----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // ✅ Observer les cartes, le titre et la section principale
  document.querySelectorAll(".card.custom-card, .page-title, .section-realisations").forEach(el => {
    observer.observe(el);
  });
});
