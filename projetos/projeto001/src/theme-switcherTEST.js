document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('theme-toggle');
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    button.checked = theme === 'dark';
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Inicializar o tema com base na preferência do usuário
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    button.checked = true;
  } else {
    button.checked = false;
  }

  button.addEventListener('click', toggleTheme);
});