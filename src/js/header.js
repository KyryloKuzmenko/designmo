document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.burger-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll('.backdrop-list-item');

  menuBtn?.addEventListener('click', () => {
    backdrop.classList.toggle('show');
  });

  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) {
      backdrop.classList.remove('show');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      backdrop.classList.remove('show');
    });
  });
});
