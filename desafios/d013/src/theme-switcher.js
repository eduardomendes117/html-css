document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
  
    const themes = ['light', 'dark']; // adicione outros temas se necessário
    let currentThemeIndex = 0;
  
    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
    };
  
    const toggleTheme = () => {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      setTheme(themes[currentThemeIndex]);
    };
  
    button.addEventListener('click', toggleTheme);
  
    // Inicialize com o tema padrão
    setTheme(themes[currentThemeIndex]);
  });