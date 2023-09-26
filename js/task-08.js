
const forma = document.querySelector('.login-form');
forma.addEventListener('submit', takeSubmit);

function takeSubmit(evt) {
       evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

    const request = {
        email: email.value ,
        password: password.value
    };

    const values = document.querySelectorAll('input');
 values.forEach(input => {
    if (input.value.trim() === '') {
        alert("Все поля должны быть заполнены!")
    }
});
    evt.currentTarget.reset();

}
