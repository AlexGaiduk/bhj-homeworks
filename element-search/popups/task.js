const modalPopups = document.querySelector('#modal_main');
modalPopups.className = 'modal modal_active';

const modalClose = document.querySelectorAll('div.modal__close');

const modalBtn = document.querySelector('.show-success');

const success = document.querySelector('#modal_success');

modalBtn.onclick = function () {
    modalPopups.className = 'modal';
    success.className = 'modal modal_active';
};

modalClose[1].onclick = function () {
    modalPopups.className = 'modal';
    success.className = 'modal';
};
