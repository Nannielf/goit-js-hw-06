
const forma = document.querySelector('.login-form');
forma.addEventListener('submit', takeSubmit);

function takeSubmit(evt) {
       evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

    const request = {
        email: email.value ,
        password: password.value
    };
    console.log(request);
    evt.currentTarget.reset();
}