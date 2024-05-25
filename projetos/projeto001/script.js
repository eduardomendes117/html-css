const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => nav.classList.toggle("active"));


var loadingScreen = document.getElementById('loading-screen');
var content = document.getElementById('content');



var i = setInterval(function () {

    clearInterval(i);
    loadingScreen.style.display = 'none';
    content.style.display = 'block';

},)

/*criação de circulos*/
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#9400D3'];
    const createCircle = () => {
    const circle = document.createElement('div');

    circle.className = 'circle';
    Object.assign(circle.style, {
        left: Math.random() * window.innerWidth + 'px',
        top: '-20px',
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: 2 + Math.random() * 3 + 's',
        animationDelay: Math.random() * 5 + 's'
      });

      document.querySelector('.topo').appendChild(circle);
      circle.addEventListener('animationend', () => circle.remove());
    };
setInterval(createCircle, 300);