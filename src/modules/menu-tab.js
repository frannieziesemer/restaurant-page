const menuFactory = (item, price) => {
  return { item, price };
}

let menuItems = [menuFactory('watermelon', 1), menuFactory('rockmelon', 10000), menuFactory('honeydew melon', 9) ];


const createMenuContent = (menuArray) => {
  
  const content = document.createElement('div');
  content.classList.add('menu-content');

  menuArray.map(el => {
    const menuItemWrapper = document.createElement('div');
    menuItemWrapper.classList.add('menu-item-wrapper');
    const menuItem = document.createElement('p');
    menuItem.classList.add('menu-item');
    menuItem.textContent = el.item;
    const menuPrice = document.createElement('p');
    menuPrice.classList.add('menu-price');
    menuPrice.textContent = el.price;
    menuItemWrapper.appendChild(menuItem);
    menuItemWrapper.appendChild(menuPrice);
    content.appendChild(menuItemWrapper);
  });

  return content;
}


const loadMenuTab = () => {
  const tabContent = document.getElementById('main');
  tabContent.innerHTML = '';
  tabContent.appendChild(createMenuContent(menuItems));
 
}


export default loadMenuTab 