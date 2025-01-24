const scrollContainer = document.querySelector('.projects-all');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

leftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300, 
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300, 
    behavior: 'smooth'
  });
});