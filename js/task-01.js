const arrItem = Array.from(document.querySelectorAll('.item'));
console.log('Number of categories: ' + arrItem.length);

arrItem.forEach(item => {
    let title = item.querySelector('h2');
    console.log('Category: ' + title.textContent);
    console.log('Elements: ' + Array.from(item.querySelectorAll('li')).length);
    });