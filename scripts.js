const dark = 'dark-mode';
const element = document.body;

function setMode() {
  if (localStorage[dark] === false) element.classList.remove('dark-mode');
  element.classList.add('transitions');
}

function toggleDarkMode() {
  element.classList.toggle('dark-mode');
  localStorage[dark] = !localStorage[dark];
}

setMode();
