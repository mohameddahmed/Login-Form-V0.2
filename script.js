const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const form = document.querySelector('.form');
const footer = document.querySelector('.footer');
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-mode';

updateTheme();


darkModeToggle.addEventListener('click', () => {
 
  currentTheme = (currentTheme === 'light-mode') ? 'dark-mode' : 'light-mode';

  updateTheme();
  
  localStorage.setItem('theme', currentTheme);
});


function updateTheme() {
  body.className = currentTheme;
  navbar.className = `navbar ${currentTheme}`;
  form.className = `form ${currentTheme}`;
  footer.className = `footer ${currentTheme}`;
}
