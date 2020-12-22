import Swiper, {
  Navigation,
  Controller,
  EffectFade
} from 'swiper'
const swp = document.querySelector('.swiper-container')
Swiper.use([Navigation, Controller, EffectFade])
const SliderA = new Swiper(swp, {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 600,
  loop: true,
  loopedSlides: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }

})

const SliderB = new Swiper('.swiper-image', {
  slidesPerView: 1,
  setWrapperSize: true,
  centeredSlides: true,
  effect: 'fade',
  loop: true,
  loopedSlides: 5,

})


SliderA.controller.control = SliderB;
SliderB.controller.control = SliderA;
SliderB.controller.by = 'container';




const form = document.querySelector('.prime-c')


if (!!form) {
const onButton = document.querySelector('.form-button')
const primeBlock = document.querySelector('.prime-c')

  const formClose = document.querySelector('.form-close')
  function viewBlock(e) {
    e.preventDefault()
    primeBlock.style.display = 'block'
  }

  function primeNone() {
    primeBlock.style.display = ''
  }

  formClose.addEventListener('click', primeNone)
  form.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) {
      primeNone()
      return
    }
    return

  })
  onButton.addEventListener('click', viewBlock)
}
