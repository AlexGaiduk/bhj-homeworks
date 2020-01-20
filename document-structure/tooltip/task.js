
const tooltip = document.querySelector('.tooltip');
const links = document.querySelectorAll('.has-tooltip');

for (let link of links) {
    link.addEventListener('click', showHint);
}

tooltip.addEventListener('click', () => tooltip.classList.remove('tooltip_active'));

function showHint(event) {
    event.preventDefault();

    const tooltipActive = document.querySelector('.tooltip_active');

    if (tooltipActive) {
        tooltipActive.classList.remove('tooltip_active');
        return
    }

    tooltip.classList.add('tooltip_active');
    tooltip.innerText = event.target.title;
    tooltip.style.left = event.target.getBoundingClientRect().left + 'px';
    tooltip.style.top = event.target.getBoundingClientRect().top + 20 + 'px';
}

