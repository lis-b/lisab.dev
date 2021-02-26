const className = 'dark-mode';
const key = 'mode';
const valDark = 'dark';
const valLight = 'light';

const setVal = (arg) => { localStorage.setItem(key, arg); };
const getVal = () => localStorage.getItem(key);
const oppositeVal = () => (getVal() === valDark ? valLight : valDark);

const removeDarkMode = () => document.body.classList.remove(className);

const toggleDarkMode = () => {
  document.body.classList.toggle(className);
  setVal(oppositeVal());
};

const setMode = () => {
  if (getVal() === valLight) document.body.classList.remove(className);
};

setMode();
