const header = document.querySelector('.fractal-bg');
const overlay = document.querySelector('.cursor-overlay');

header.addEventListener('mousemove', function(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const blurRadius = 100; // Radius of the reduced blur effect

  overlay.style.setProperty('--cursor-x', `${mouseX}px`);
  overlay.style.setProperty('--cursor-y', `${mouseY}px`);
  overlay.style.setProperty('--blur-radius', `${blurRadius}px`);
});
