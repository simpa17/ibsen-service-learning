// var nav = document.querySelector('.header')
// nav.classList.toggle('header--fixed', window.scrollY >= window.innerHeight)
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
var headerNavBar = document.querySelector('.header__nav-bar')
openSearch.addEventListener('click', function () {
  searchBox.classList.add('animate__slideInDown')
  searchBox.classList.remove('close')
  headerNavBar.classList.add('close', 'animate__slideInDown')
})

closeSearch.addEventListener('click', function () {
  console.log(searchBox)
  searchBox.classList.add('close')
  searchBox.classList.remove('animate__slideInDown')
  headerNavBar.classList.remove('close')
})

$(document).ready(function () {
  var currentImage = 1
  var totalImages = 4
  function increaseImage() {
    ++currentImage
    if (currentImage > totalImages) {
      currentImage = 1
    }
  }
  function decreaseImage() {
    --currentImage
    if (currentImage < 1) {
      currentImage = totalImages
    }
  }
  window.setInterval(function () {
    $('#next').click()
  }, 3000)
  $('#next').on('click', function () {
    $('#img_' + currentImage)
      .stop()
      .fadeOut(1)
    decreaseImage()
    $('#img_' + currentImage)
      .stop()
      .fadeIn(1)
  })
  $('#previous').on('click', function () {
    $('#img_' + currentImage)
      .stop()
      .fadeOut(1)
    increaseImage()
    $('#img_' + currentImage)
      .stop()
      .fadeIn(1)
  })
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  })
})

window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector('.header__name-img').style.height = '120%'
    document.querySelector('.header__logo img').style.height = '50px'
    document.querySelector('.partner__knot ion-icon').style.position = 'unset'
  } else {
    document.querySelector('.header__name-img').style.height = '150%'
    document.querySelector('.header__logo img').style.height = '80px'
    document.querySelector('.partner__knot ion-icon').style.position = 'fixed'
  }
}
