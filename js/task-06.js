const enter = document.querySelector('#validation-input');

enter.addEventListener('blur', checkNumber);
function checkNumber() {
    if (enter.getAttribute('data-length') > enter.value.length) { 
    enter.classList.remove('valid');
    enter.classList.add('invalid');
  } else {
    enter.classList.remove('invalid');
    enter.classList.add('valid');
  }
    }
