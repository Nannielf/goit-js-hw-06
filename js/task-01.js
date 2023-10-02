const arrItem = Array.from(document.querySelectorAll('.item'));
console.log('Number of categories: ' + arrItem.length);
arrItem.forEach(item => {
    console.log('Category: ' + item.firstElementChild.textContent);
    console.log('Elements: ' + item.lastElementChild.children.length);
    });