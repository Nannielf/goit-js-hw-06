const inputName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
inputName.addEventListener('input', getName);

function getName(event) {
    if (inputName.value == '') {
      userName.textContent = 'Anonymous';
    } else { 
    userName.textContent = inputName.value;
    };
};