import loadHome from './modules/layout.js';
import loadAboutTab from './modules/about-tab.js';
import loadMenuTab from './modules/menu-tab.js';
import loadContactTab from './modules/contact-tab.js';


window.onload = loadHome();

const addTabEvents = (() => {
  const aboutTab = document.getElementById('about');
  const menuTab = document.getElementById('menu');
  const contactTab = document.getElementById('contact');

  aboutTab.addEventListener('click', function(event) {
    handleClickEventStyles(event);
    loadAboutTab();
  });
  menuTab.addEventListener('click', function(event) {
    handleClickEventStyles(event);
    loadMenuTab()
  });
  contactTab.addEventListener('click', function(event) {
    handleClickEventStyles(event);
    loadContactTab()
  });

  })();



function handleClickEventStyles(event) {
  const tabButtons = document.querySelectorAll('.tab-button');
  for(let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }
  
  const currentButton = event.target;
  currentButton.classList.add('active');
}


