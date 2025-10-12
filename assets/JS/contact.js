// ================================
// CONTACT.JS – Parallax + EmailJS + Animations
// ================================

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------
     🎨 Effet Parallax de fond
  ------------------------------ */
  const bg = document.querySelector('.background-parallax');
  if (bg) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const headerHeight = document.querySelector('header').offsetHeight;
      const footerOffset = document.querySelector('footer').offsetTop;

      const maxTranslate = footerOffset - headerHeight - bg.offsetHeight;
      let translateY = scrollTop * 0.3; // effet fluide

      if (translateY > maxTranslate) translateY = maxTranslate;
      if (translateY < 0) translateY = 0;

      bg.style.transform = `translateY(${translateY}px)`;
    });
  }

  /* ------------------------------
     ✨ Animation au scroll
  ------------------------------ */
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

  document.querySelectorAll(".page-title, .contact-box, .contact-info, .contact-section").forEach(el => {
    observer.observe(el);
  });

  /* ------------------------------
     📧 Envoi du formulaire via EmailJS
  ------------------------------ */
  emailjs.init({ publicKey: "6-zxvBwN4IB6yu8bI" });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // 📨 Envoi du mail à Lorie (toi)
      emailjs.sendForm("service_adntey2", "template_94ha4qn", form)
        .then(() => {
          // 💌 Envoi du mail automatique de remerciement au client
          const userEmail = form.querySelector('input[name="email"]').value;
          const userName = form.querySelector('input[name="name"]').value;

          emailjs.send("service_adntey2", "template_yudyqfh", {
            name: userName,
            email: userEmail
          });

          // ✅ Redirection après envoi
          window.location.href = "merci.html";
        })
        .catch((error) => {
          console.error("Erreur EmailJS :", error);
          alert("Erreur : le message n’a pas pu être envoyé 😢\n" + JSON.stringify(error));
        });
    });
  }
});
