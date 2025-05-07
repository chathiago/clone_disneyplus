document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll(`[data-faq-question]`);

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    // esconder e exibir o menu (scroll)
    window.addEventListener('scroll', function(){
        const atualPosition = window.scrollY;

        if (atualPosition < heroHeight) {
            hiddenElementsHeader()
        } else {
            showElementsHeader()
        }
    })

    // abas (tabs)
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

    // faq (accordion)
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrClose);
    }
})

function hiddenElementsHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--hidden')
}

function showElementsHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--hidden')
}

function openOrClose(e) {
    const classe = 'faq__questions__item--open';
    const pareElement = e.target.parentNode;

    pareElement.classList.toggle(classe);
}

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