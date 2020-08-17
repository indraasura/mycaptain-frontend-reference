var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

menu.addEventListener('click', () => {
    nav.classList.remove('hide-mobile')
})


exit.addEventListener('click', () => {
    nav.classList.add('hide-mobile')
})
