const menu = document.querySelector('header')
const menuicon = document.querySelector('.menu-icon')
const closemenuicon = document.querySelector('.close-menu-icon')
const sections = document.querySelectorAll('section')
const footer = document.querySelector('footer')
const menuitems = document.querySelectorAll('.menu-item')

menuicon.addEventListener('click', () => {
    menu.classList.remove('header')
    menu.classList.add('header-adaptive')
    footer.classList.add('d-none')
    for (const section of sections) {
        section.classList.add('d-none')
    }
})

closemenuicon.addEventListener('click', () => {
    menu.classList.remove('header-adaptive')
    menu.classList.add('header')
    footer.classList.remove('d-none')
    for (const section of sections) {
        section.classList.remove('d-none')
    }
})

for (const menuitem of menuitems) {
    menuitem.addEventListener('click', () => {
        menu.classList.remove('header-adaptive')
        menu.classList.add('header')
        footer.classList.remove('d-none')
    for (const section of sections) {
        section.classList.remove('d-none')
    }
    })
}