// Script pour suivre la position de la souris et mettre à jour le curseur abeille
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
  document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
});

// Animation fluide pour le curseur
function updateCursor() {
  requestAnimationFrame(updateCursor);
}

updateCursor();

