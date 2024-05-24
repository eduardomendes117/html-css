document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('background-circles');

  const generateCircle = () => {
    const circle = document.createElement('div');
    const size = Math.random() * 20 + 10; // Tamanho entre 10 e 30px
    const x = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5; // Duração entre 5 e 10 segundos
    const delay = Math.random() * 5; // Atraso até 5 segundos
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.backgroundColor = color;
    circle.style.animationDuration = `${duration}s`;
    circle.style.animationDelay = `${delay}s`;

    container.appendChild(circle);

    // Remover o círculo quando a animação terminar
    circle.addEventListener('animationend', () => {
      container.removeChild(circle);
    });
  };

  // Gerar novos círculos a cada intervalo de tempo
  setInterval(generateCircle, 400);
});