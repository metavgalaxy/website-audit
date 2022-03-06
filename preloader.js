let preloadingRender = true
let intervalCoef = 1.12
let intervalTime = 1.5
let loadProcent = 0

function preloading() {
  let percent = document.querySelector('.preloader-wrapper #percent')
  let start = performance.now()
  requestAnimationFrame(function interval(time) {
    let delta = time - start
    if ( delta >= intervalTime ) {
      loadProcent += 1
      intervalTime *= intervalCoef
      percent.innerHTML = loadProcent
    }
    if ( loadProcent === 100) preloadingRender = false
    if ( preloadingRender ) requestAnimationFrame(interval)
  })
}
function removePreloader() {
  console.log('page loaded')
  let preloader = document.querySelector('.preloader-wrapper')
  if ( preloadingRender ) {
    intervalCoef = 1
    intervalTime = 1.5
  }
  setTimeout(function() {
    preloader.style.opacity = 0
    document.querySelector('.root').classList.remove('loading')
    document.querySelector('.root').classList.add('preloading')
    setTimeout(function() {
      document.querySelector('.root').classList.remove('preloading')
    }, 500)
    setTimeout(function () {
      preloader.remove()
    }, 500)
  }, 2500)
}
document.addEventListener("DOMContentLoaded", preloading);
window.addEventListener('load', removePreloader);
