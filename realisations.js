document.addEventListener('DOMContentLoaded', function() {
    const modalEl = document.getElementById('modalDynamic');
    const modalTitle = modalEl.querySelector('#modalTitle');
    const carouselInner = modalEl.querySelector('#carouselInner');
    const modalRecipe = modalEl.querySelector('#modalRecipe');
    let carouselInstance = null;

    modalEl.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget.closest('.card');
        const title = button.getAttribute('data-title');
        const images = JSON.parse(button.getAttribute('data-images'));
        const recipeHTML = button.getAttribute('data-recipe');

        // Titre
        modalTitle.textContent = title;

        // Recette
        modalRecipe.innerHTML = recipeHTML;

        // Slides
        carouselInner.innerHTML = '';
        images.forEach((src, i) => {
            const div = document.createElement('div');
            div.className = 'carousel-item' + (i === 0 ? ' active' : '');
            div.innerHTML = `<img src="${src}" class="d-block w-100" alt="${title}">`;
            carouselInner.appendChild(div);
        });

        // Créer l’instance du carousel
        carouselInstance = new bootstrap.Carousel(modalEl.querySelector('#modalCarousel'), {
            interval: false
        });
    });

    modalEl.addEventListener('hidden.bs.modal', function() {
        if (carouselInstance) {
            carouselInstance.dispose();
            carouselInstance = null;
        }
    });
});
