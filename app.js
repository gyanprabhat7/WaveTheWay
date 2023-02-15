
const playButton = document.querySelector('.cta');
const popup = document.createElement('div');
const closeButton = document.createElement('button');

popup.innerHTML = '<h3>Choose your level:</h3><ul><li><a href="#">Easy</a></li><li><a href="#">Medium</a></li><li><a href="#">Hard</a></li></ul>';
popup.classList.add('popup');
closeButton.innerHTML = 'Close';
closeButton.classList.add('close-button');

playButton.addEventListener('click', () => {
  document.body.appendChild(popup);
  popup.appendChild(closeButton);
});

closeButton.addEventListener('click', () => {
  document.body.removeChild(popup);
});
