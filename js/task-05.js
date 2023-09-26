const inputName = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
inputName.addEventListener('input', getName);

function getName(event) {
    userName.textContent = inputName.value;
};