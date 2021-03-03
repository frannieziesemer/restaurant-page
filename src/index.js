import loadHome from './modules/layout.js';
import loadAboutTab from './modules/about-tab.js';
import loadMenuTab from './modules/menu-tab.js';
import loadContactTab from './modules/contact-tab.js';


window.onload = loadHome();

const addTabEvents = (() => {
  const aboutTab = document.getElementById('about');
  const menuTab = document.getElementById('menu');
  const contactTab = document.getElementById('contact');

  aboutTab.addEventListener('click', loadAboutTab);
  menuTab.addEventListener('click', loadMenuTab);
  contactTab.addEventListener('click', loadContactTab);

  })();






