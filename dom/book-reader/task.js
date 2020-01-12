
const textReader = document.querySelector('.book');
const textControl = document.querySelector('.book__control');

for (let control of textControl.children) {
    control.addEventListener('click', change)
}

function change(event) {
    event.preventDefault();
    if (event.target.dataset.size === 'big') {
        textReader.classList.add('book_fs-big');
        textReader.classList.remove('book_fs-small');
    } else if (event.target.dataset.size === 'small') {
        textReader.classList.add('book_fs-small');
        textReader.classList.remove('book_fs-big');
    } else {
        textReader.classList.remove('book_fs-small');
        textReader.classList.remove('book_fs-big');
    }

    for (let letter of document.querySelectorAll('.font-size')) {
        letter.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
}