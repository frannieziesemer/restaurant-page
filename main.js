(()=>{"use strict";const e=(e,t)=>{const i=document.createElement("button");return i.setAttribute("id",e),i.classList.add("tab-button"),i.textContent=t,i};function t(e){const t=document.querySelectorAll(".tab-button");for(let e=0;e<t.length;e++)t[e].classList.remove("active");console.log(t),e.target.classList.add("active")}window.onload=(()=>{const t=document.getElementById("content");t.appendChild((()=>{const t=document.createElement("div");return t.setAttribute("id","header-banner"),t.appendChild(((e,t)=>{const i=document.createElement("h1");return i.setAttribute("id","title"),i.textContent="melon",i})()),t.appendChild((()=>{const t=document.createElement("div");return t.setAttribute("id","tabs-block"),t.appendChild(e("about","ABOUT")),t.appendChild(e("menu","MENU")),t.appendChild(e("contact","CONTACT")),t})()),t})()),t.appendChild((()=>{const e=document.createElement("div");return e.setAttribute("id","main"),e})())})(),(()=>{const e=document.getElementById("about"),i=document.getElementById("menu"),n=document.getElementById("contact");e.addEventListener("click",(function(e){t(e),(()=>{const e=document.getElementById("main");e.innerHTML="",e.appendChild((e=>{const t=document.createElement("p");return t.classList.add("about-content"),t.textContent="ABOUT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Lacus viverra vitae congue eu consequat ac felis donec. Aliquet nec ullamcorper sit amet risus. At volutpat diam ut venenatis tellus in. Quis varius quam quisque id diam vel quam. Aliquam vestibulum morbi blandit cursus. Porta nibh venenatis cras sed. Quam vulputate dignissim suspendisse in. Ut eu sem integer vitae justo eget magna fermentum iaculis. Tristique senectus et netus et malesuada fames. Tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Accumsan tortor posuere ac ut consequat semper viverra. Elementum nibh tellus molestie nunc non blandit massa enim nec. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Diam maecenas sed enim ut sem viverra. Amet tellus cras adipiscing enim eu. Enim tortor at auctor urna. At varius vel pharetra vel turpis nunc eget lorem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.",t})())})()})),i.addEventListener("click",(function(e){t(e),(()=>{const e=document.getElementById("main");e.innerHTML="",e.appendChild((e=>{const t=document.createElement("p");return t.classList.add("menu-content"),t.textContent="MENU Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Lacus viverra vitae congue eu consequat ac felis donec. Aliquet nec ullamcorper sit amet risus. At volutpat diam ut venenatis tellus in. Quis varius quam quisque id diam vel quam. Aliquam vestibulum morbi blandit cursus. Porta nibh venenatis cras sed. Quam vulputate dignissim suspendisse in. Ut eu sem integer vitae justo eget magna fermentum iaculis. Tristique senectus et netus et malesuada fames. Tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Accumsan tortor posuere ac ut consequat semper viverra. Elementum nibh tellus molestie nunc non blandit massa enim nec. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Diam maecenas sed enim ut sem viverra. Amet tellus cras adipiscing enim eu. Enim tortor at auctor urna. At varius vel pharetra vel turpis nunc eget lorem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.",t})())})()})),n.addEventListener("click",(function(e){t(e),(()=>{const e=document.getElementById("main");e.innerHTML="",e.appendChild((e=>{const t=document.createElement("p");return t.classList.add("contact-content"),t.textContent="CONTACT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Lacus viverra vitae congue eu consequat ac felis donec. Aliquet nec ullamcorper sit amet risus. At volutpat diam ut venenatis tellus in. Quis varius quam quisque id diam vel quam. Aliquam vestibulum morbi blandit cursus. Porta nibh venenatis cras sed. Quam vulputate dignissim suspendisse in. Ut eu sem integer vitae justo eget magna fermentum iaculis. Tristique senectus et netus et malesuada fames. Tristique senectus et netus et. Metus dictum at tempor commodo ullamcorper. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Accumsan tortor posuere ac ut consequat semper viverra. Elementum nibh tellus molestie nunc non blandit massa enim nec. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Diam maecenas sed enim ut sem viverra. Amet tellus cras adipiscing enim eu. Enim tortor at auctor urna. At varius vel pharetra vel turpis nunc eget lorem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.",t})())})()}))})()})();