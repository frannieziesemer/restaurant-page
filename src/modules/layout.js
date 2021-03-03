
const createTitle = (id, text) => {
  const title = document.createElement('h1');
  title.setAttribute('id', id);
  title.textContent = text;
  return title;
}

const createButton = (id, text) => {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.classList.add('tab-button');
  button.textContent = text;
  return button;
}

const createTabsBlock = () => {
  const tabsBlock = document.createElement('div');
  
  tabsBlock.setAttribute('id', 'tabs-block');

  tabsBlock.appendChild(createButton('about', 'ABOUT'));  
  tabsBlock.appendChild(createButton('menu', 'MENU'));  
  tabsBlock.appendChild(createButton('contact', 'CONTACT'));  

  return tabsBlock;
}

const createHeader = () => {
  const headerBanner = document.createElement('div');
  headerBanner.setAttribute('id', 'header-banner');

  headerBanner.appendChild(createTitle('title', 'melon'));  
  headerBanner.appendChild(createTabsBlock());
  
  return headerBanner;
}

const createMain = () => {
  const main = document.createElement('div');
  main.setAttribute('id', 'main')
  return main;
}

const loadHome = () => {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());

  
} 


export default loadHome