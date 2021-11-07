const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', espandirMenu)
btnMobile.addEventListener('touchstart', espandirMenu)

function espandirMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {event.currentTarget.setAttribute('aria-label', 'Fechar menu')} else {event.currentTarget.setAttribute('aria-label', 'Abrir menu')}

}