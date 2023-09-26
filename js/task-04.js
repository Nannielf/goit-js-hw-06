const schet = document.querySelector('#value');
const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');

minus.addEventListener('click', goMinus);
plus.addEventListener('click', goPlus);
let counterValue = 0;
function goMinus() {
    counterValue -= 1;
    schet.textContent = `${counterValue}`;
};
function goPlus() {
    counterValue += 1;
    schet.textContent = `${counterValue}`;
};