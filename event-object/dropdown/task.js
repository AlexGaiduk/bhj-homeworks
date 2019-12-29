const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
// const dropLink = document.querySelector('.dropdown__link');
const dropLink = document.querySelectorAll('a');
dropValue.addEventListener('click', show);

function show(event) {
    if (dropList.className === 'dropdown__list') {
        dropList.className = 'dropdown__list dropdown__list_active';
    } else {
        dropList.className = 'dropdown__list';
    }
}

for (let link of dropLink) {
    link.addEventListener('click', rename);
}

function rename(event) {
    event.preventDefault();
    dropValue.textContent = event.target.textContent;
    dropList.className = 'dropdown__list';
}