//using object to construct contact details
const contactDetails = {
  email: 'email@email.com',
  phone: '01 2345 6789',
  address: '1 Street St, City 1234'
}

//create the html elements and insert data from object 
const createContent = (object) => {
  const content = document.createElement('div');
  content.classList.add('contact-content');
  for(let property in object) {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');
    
    const contactProperty = document.createElement('p');
    contactProperty.textContent = property;

    const contactValue = document.createElement('p');
    contactValue.textContent = object[property];

    contactWrapper.appendChild(contactProperty);
    contactWrapper.appendChild(contactValue);
    content.appendChild(contactWrapper);
  }
  return content;
}


const loadContactTab = () => {
  const tabContent = document.getElementById('main');
  tabContent.innerHTML = '';
  tabContent.appendChild(createContent(contactDetails));


}


export default loadContactTab 