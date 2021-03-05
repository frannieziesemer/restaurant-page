import loadHome from './modules/layout.js';
import loadAboutTab from './modules/about-tab.js';
import loadMenuTab from './modules/menu-tab.js';
import loadContactTab from './modules/contact-tab.js';


window.onload = loadHome();

const tabButtons = document.querySelectorAll('.tab-button');


const addTabEvents = (() => {
  const tabList = document.querySelector('[role="tabList"]');
  console.log('tablist '+ tabList);


  tabButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      changeTab(event);
    
    })
  })
  //enable arrow navigatin vetween tabs in the tab list
  let tabFocus = 0;
  tabList.addEventListener('keydown', event => {
    //move right, right arrow == 39, left arrow == 37
    if(event.keyCode === 39 || event.keyCode === 37) {
      tabButtons[tabFocus].setAttribute('tabindex', -1);
      if(event.keyCode === 39) {
        tabFocus++;
        console.log('key right event ' + tabFocus);
        //if we are at the end, go to the start
        if(tabFocus >= tabButtons.length) {
          tabFocus = 0; 
        }
        //move left
      } else if (event.keyCode === 37) {
        tabFocus--;
        // if we are at the start, move to end
        if (tabFocus < 0) {
          tabFocus = tabButtons.length - 1;
        }
      }
    }
    tabButtons[tabFocus].setAttribute('tabindex', 0);
    tabButtons[tabFocus].focus();
  })

  })();



function changeTab(event) {
  //clear contents of main section 
  const tabContent = document.getElementById('main');
  tabContent.innerHTML = '';

  const panelId = event.target.getAttribute('aria-controls');
  const tabId = event.target.getAttribute('id');
      if(tabId === 'menu') loadMenuTab(panelId, tabId, tabContent);
      if(tabId === 'about') loadAboutTab(panelId, tabId, tabContent);
      if(tabId === 'contact') loadContactTab(panelId, tabId, tabContent);

  //remove underline style 
  const currentTab = event.target;
  
  //remove all current selected tab 
  tabButtons.forEach(element => { 
      element.setAttribute('aria-selected', false);
      element.classList.remove('active');
  })
  
  //set current tab as selected
  currentTab.setAttribute('aria-selected', true);
  currentTab.classList.add('active');
  }

