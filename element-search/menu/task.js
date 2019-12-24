const menuLink = document.querySelectorAll('.menu__link');

for (let link of Array.from(menuLink)) {
    link.onclick = function () {

        const element = link.parentElement;
        if (element.querySelector('.menu_sub').className === 'menu menu_sub') {
            element.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            element.querySelector('.menu_sub').className = 'menu menu_sub'
        }

        if (link.closest('.menu_main')) {
            return false
        }
    }
}
