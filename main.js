const steps = document.querySelectorAll('.progress-bar__step')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const progressbar = document.querySelector('.progress-bar__line')

const lastStep = steps.length
let currentStep = 0

next.addEventListener('click', () => {
  progressbar.style.width = `${(100 / (steps.length - 1)) * (currentStep + 1)}%`
  currentStep++

  steps[currentStep].classList.add('progress-bar__step--active')
  prev.disabled = false
  if (currentStep === lastStep - 1) {
    next.disabled = true
    prev.disabled = false
  }
})

prev.addEventListener('click', () => {
  steps[currentStep].classList.remove('progress-bar__step--active')
  next.disabled = false
  if (currentStep === 1) {
    next.disabled = false
    prev.disabled = true
  }

  progressbar.style.width = `${(100 / (steps.length - 1)) * (currentStep - 1)}%`
  currentStep--
})
