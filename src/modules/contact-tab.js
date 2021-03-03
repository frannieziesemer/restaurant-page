const contactContent = 'CONTACT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Lacus viverra vitae congue eu consequat ac felis donec. Aliquet nec ullamcorper sit amet risus. At volutpat diam ut venenatis tellus in. Quis varius quam quisque id diam vel quam. Aliquam vestibulum morbi blandit cursus. Porta nibh venenatis cras sed. Quam vulputate dignissim suspendisse in. Ut eu sem integer vitae justo eget magna fermentum iaculis. Tristique senectus et netus et malesuada fames. Tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Accumsan tortor posuere ac ut consequat semper viverra. Elementum nibh tellus molestie nunc non blandit massa enim nec. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Diam maecenas sed enim ut sem viverra. Amet tellus cras adipiscing enim eu. Enim tortor at auctor urna. At varius vel pharetra vel turpis nunc eget lorem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.'

const createContent = (text) => {
  const content = document.createElement('p');
  content.classList.add('contact-content');
  content.textContent = text;
  return content;
}


const loadContactTab = () => {
  const tabContent = document.getElementById('main');
  tabContent.innerHTML = '';
  tabContent.appendChild(createContent(contactContent));
}


export default loadContactTab 