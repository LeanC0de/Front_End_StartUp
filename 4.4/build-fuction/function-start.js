const btn = document.querySelector('button');
//btn.onclick = displayMessage;
/* btn.onclick = function() {
    displayMessage('Woo, this is a different message!');
  }; */

btn.onclick = function() {
    displayMessage('Your inbox is almost full — delete some mails', 'warning');
  };

/* btn.onclick = function() {
    displayMessage('Brian: Hi there, how are you today?','chat');
}; */


  
  
  
function displayMessage(msgText, msgType) {
const html = document.querySelector('html');//选择<html>元素

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = msgText;

panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
  panel.parentNode.removeChild(panel);
}

if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(icons/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
  

}