var openMenu = document.querySelector('#open-menu')
var navBar = document.querySelector('.nar-bar')
var close = document.querySelector('#close')

openMenu.addEventListener('click', function () {
  navBar.style.transform = 'translateX(0)'
  var list = document.querySelectorAll('.nar-bar__list')
  list.forEach((step, i) =>
    step.classList.add('animate__fadeInRight', 'animate__delay-' + i + 's')
  )
})

close.addEventListener('click', function () {
  navBar.style.transform = 'translateX(300px)'
})
