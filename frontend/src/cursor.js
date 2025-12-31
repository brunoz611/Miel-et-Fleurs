// Script pour suivre la position de la souris et mettre à jour le curseur abeille
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});
