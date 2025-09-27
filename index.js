const bg = document.querySelector('.background-parallax');

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