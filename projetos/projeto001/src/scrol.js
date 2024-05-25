document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    let scrollingDown = false;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        if (!scrollingDown && scrollTop > navbar.offsetHeight) {
          navbar.classList.add('navbar-hidden');
          scrollingDown = true;
        }
      } else {
        // Rolando para cima
        navbar.classList.remove('navbar-hidden');
        scrollingDown = false;
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    });
  });