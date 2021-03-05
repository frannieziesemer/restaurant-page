
const createTitle = (id, text) => {
  const title = document.createElement('h1');
  title.setAttribute('id', id);
  title.textContent = text;
  return title;
}

const createButton = (id, text) => {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', false);
  button.setAttribute('aria-controls', `panel-${id}`);
  button.setAttribute('tabindex', -1);
  
  button.classList.add('tab-button');
  button.textContent = text;
  return button;
}

const createTabList = () => {
  const tabList = document.createElement('div');
  
  tabList.setAttribute('id', 'tabs-block');
  tabList.setAttribute('role', 'tabList');
  tabList.setAttribute('aria-label', 'Business Information');

  tabList.appendChild(createButton('about', 'ABOUT'));  
  tabList.appendChild(createButton('menu', 'MENU'));  
  tabList.appendChild(createButton('contact', 'CONTACT'));  

  return tabList;
}

const createHeader = () => {
  const headerBanner = document.createElement('div');
  headerBanner.setAttribute('id', 'header-banner');

  headerBanner.appendChild(createTitle('title', 'toast'));  
  
  return headerBanner;
}

const createMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main')
  return main;
}

const loadHome = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createTabList());
  content.appendChild(createMain());

  
} 


export default loadHome