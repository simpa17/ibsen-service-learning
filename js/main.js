var openMenu = document.querySelector('#open-menu')
var navBar = document.querySelector('.nar-bar')
var close = document.querySelector('#close')
var openSearch = document.querySelector('#search')

openMenu.addEventListener('click', function () {
  navBar.style.transform = 'translateX(0)'
  var list = document.querySelectorAll('.nar-bar__list')
  list.forEach((step, i) => step.classList.add('animate__lightSpeedInRight'))
  var img = document.querySelector('.nar-bar__img')
  img.classList.add('animate__rotateInDownLeft')
})

close.addEventListener('click', function () {
  navBar.style.transform = 'translateX(300px)'
})

var searchBox = document.querySelector('.search-box')
var closeSearch = document.querySelector('.search-box__close')
openSearch.addEventListener('click', function () {
  searchBox.style.transform = 'translateY(0)'
  searchBox.classList.add('animate__slideInDown')
})

closeSearch.addEventListener('click', function () {
  searchBox.style.transform = 'translateY(-100px)'
})
