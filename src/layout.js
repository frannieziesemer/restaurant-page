
const createTitle = () => {
  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = 'melon';

  return title;
}

const createTabsBlock = () => {
  const tabsBlock = document.createElement('div');
  const menu = document.createElement('h2');
  const about = document.createElement('h2');
  const contact = document.createElement('h2');

  tabsBlock.setAttribute('id', 'tabs-block');
  about.setAttribute('id', 'about');
  menu.setAttribute('id', 'menu');
  contact.setAttribute('id', 'contact');

  menu.textContent = 'menu';
  about.textContent = 'about';
  contact.textContent = 'contact';

  tabsBlock.appendChild(menu);  
  tabsBlock.appendChild(about);  
  tabsBlock.appendChild(contact);

  return tabsBlock;
}

const createHeader = () => {
  const headerBanner = document.createElement('div');
  headerBanner.setAttribute('id', 'header-banner');

  headerBanner.appendChild(createTitle());  
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

  return content;
} 


export default loadHome