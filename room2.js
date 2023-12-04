function move(e) {
      window.scrollTo(1.5*e.clientX - window.innerWidth / 1.05, 2*e.clientY - window.innerHeight / 1.05);
      
}
/*const container = document.getElementById('container');
let delay = 100;
let mouseX = 0;
let mouseY = 0;

function move(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  setTimeout(updateTransform, delay);
}

function updateTransform() {
  const deltaX = (1.5 * mouseX - window.innerWidth / 1.01);
  const deltaY = (1.7 * mouseY - window.innerHeight / 1.01);
  container.style.transition = 'transform 0.3s ease-out'; // Ajustez la durée et le timing function selon vos besoins
  container.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
}*/