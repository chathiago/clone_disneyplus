document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (btn) {
            const tabTarget = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${tabTarget}"]`);
            
            hideTabs();
            tab.classList.add('shows__list--active');

            removeBtnActive();
            btn.target.classList.add('shows__tabs__button--active')
        })
    }
})

function removeBtnActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--active')
    }
}

function hideTabs() {
    const tabContent = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('shows__list--active')
    }
}