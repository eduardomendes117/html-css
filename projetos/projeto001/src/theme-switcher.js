document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('theme-toggle');
  const themes = ['light', 'dark'];
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    button.checked = theme === 'dark';
  };
  const toggleTheme = () => setTheme(themes[(themes.indexOf(document.documentElement.getAttribute('data-theme')) + 1) % themes.length]);
  setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  button.addEventListener('click', toggleTheme);
});