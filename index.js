var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')

menu.addEventListener('click', function(){
    nav.classList.remove('hide-mobile')
})

exit.addEventListener('click', function(){
    nav.classList.add('hide-mobile')
})