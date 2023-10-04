const close_button = document.querySelector('.close_button')
const menu_button = document.querySelector('.hamburger_menu')
const menu = document.querySelector('.hidden_menu')

// 
close_button.addEventListener('click', e => {
    menu.style.display = 'none'
})

menu_button.addEventListener('click', () => {
    menu.style.display = 'block'
})