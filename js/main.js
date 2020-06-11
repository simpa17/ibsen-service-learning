var openMenu = document.querySelector('#open-menu')
var navBar = document.querySelector('.nar-bar')
var close = document.querySelector('#close')

openMenu.addEventListener('click', function () {
  navBar.style.transform = 'translateX(0)'
})

close.addEventListener('click', function () {
  navBar.style.transform = 'translateX(300px)'
})
