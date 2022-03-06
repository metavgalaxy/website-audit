const planets = ['earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'sun', 'mercury', 'venus']
const mobileCarousel = {
  planets: planets,
  previousIndex: planets.length - 1,
  activeIndex: 0,
  nextIndex: 1
}
const swipeContainerId = 'swipe'

window.addEventListener('load', function() {
  // Switch planets on the main screen -------------------------
  let readyToSwipe = true
  detectSwipe(swipeContainerId, mobileCarousel, (root, direction) => {
    if (root.classList.contains('zoom-out') && window.outerWidth < 799 && readyToSwipe) {

      readyToSwipe = false
      setTimeout(function() {
        readyToSwipe = true
      }, 210)

      switch ( direction ) {
        case 'left':
        swipePlanet(root, mobileCarousel, 1)
        break
        case 'right':
        swipePlanet(root, mobileCarousel, -1)
        break
      }
    }
  })
})

function swipePlanet(root, mobileCarousel, step) {
  const previousPlanet_Index = mobileCarousel.activeIndex
  let newIndex = mobileCarousel.activeIndex + step
  if ( newIndex < 0 ) newIndex = mobileCarousel.planets.length - 1
  if ( newIndex === mobileCarousel.planets.length ) newIndex = 0
  let prevIndex = newIndex - 1
  let nextIndex = newIndex + 1
  if ( prevIndex < 0 ) prevIndex = mobileCarousel.planets.length - 1
  if ( nextIndex === mobileCarousel.planets.length ) nextIndex = 0
  mobileCarousel.previousIndex = prevIndex
  mobileCarousel.activeIndex = newIndex
  mobileCarousel.nextIndex = nextIndex

  const previousPlanetName = mobileCarousel.planets[previousPlanet_Index]
  const newPlanetName = mobileCarousel.planets[newIndex]

  root.classList.add('planet-mobile-active-' + newPlanetName)
  root.classList.remove('planet-mobile-active-' + previousPlanetName)
}
function detectSwipe(id, mobileCarousel, func, deltaMin = 90) {
  const swipe_det = {
    sX: 0,
    sY: 0,
    eX: 0,
    eY: 0
  }
  const directions = Object.freeze({
    UP: 'up',
    DOWN: 'down',
    RIGHT: 'right',
    LEFT: 'left'
  })
  let direction = null
  const el = document.getElementById(id)
  el.addEventListener('touchstart', function(e) {
    const t = e.touches[0]
    swipe_det.sX = t.screenX
    swipe_det.sY = t.screenY
    swipe_det.eX = swipe_det.sX
    swipe_det.eY = swipe_det.sY

  }, false)
  el.addEventListener('touchmove', function(e) {
    // Prevent default will stop user from scrolling
    // e.preventDefault();
    const t = e.touches[0]
    swipe_det.eX = t.screenX
    swipe_det.eY = t.screenY

    // We show where to swipe
    const deltaSkewX = swipe_det.eX - swipe_det.sX
    const deltaSkewY = swipe_det.eY - swipe_det.sY
    if ((deltaSkewY === 0 || Math.abs(deltaSkewX / deltaSkewY) > 1) && document.getElementById(swipeContainerId).classList.contains('zoom-out')) {
      const skewActivePlanetCard = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.activeIndex]  + ' .card-planet')
      const skewPrevPlanetCard = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.previousIndex]  + ' .card-planet')
      const skewNextPlanetCard = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.nextIndex]  + ' .card-planet')
      skewActivePlanetCard.style.cssText = `transform: skew(${deltaSkewX / 50}deg) translateX(${deltaSkewX / 5}px); transition: 0s;`
      skewPrevPlanetCard.style.cssText = `transform: skew(${deltaSkewX / 80}deg) translateX(${deltaSkewX / 10}px); transition: 0s;`
      skewNextPlanetCard.style.cssText = `transform: skew(${deltaSkewX / 80}deg) translateX(${deltaSkewX / 10}px); transition: 0s;`

      const skewActivePlanet = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.activeIndex]  + ' .planet-body') || document.querySelector('.' + mobileCarousel.planets[mobileCarousel.activeIndex]  + ' video')
      const skewPrevPlanet = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.previousIndex]  + ' .planet-body') || document.querySelector('.' + mobileCarousel.planets[mobileCarousel.previousIndex]  + ' video')
      const skewNextPlanet = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.nextIndex]  + ' .planet-body') || document.querySelector('.' + mobileCarousel.planets[mobileCarousel.nextIndex]  + ' video')
      skewActivePlanet.style.cssText = `transform: translateX(${deltaSkewX / 8}px); transition: 0s;`
      skewPrevPlanet.style.cssText = `transform: translateX(${deltaSkewX / 14}px); transition: 0s;`
      skewNextPlanet.style.cssText = `transform: translateX(${deltaSkewX / 14}px); transition: 0s;`

    }
    //
  }, false)
  el.addEventListener('touchend', function(e) {
    const skewActivePlanetCard = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.activeIndex]  + ' .card-planet')
    const skewPrevPlanetCard = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.previousIndex]  + ' .card-planet')
    const skewNextPlanetCard = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.nextIndex]  + ' .card-planet')
    skewActivePlanetCard.style.cssText = ''
    skewPrevPlanetCard.style.cssText = ''
    skewNextPlanetCard.style.cssText = ''
    const skewActivePlanet = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.activeIndex]  + ' .planet-body') || document.querySelector('.' + mobileCarousel.planets[mobileCarousel.activeIndex]  + ' video')
    const skewPrevPlanet = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.previousIndex]  + ' .planet-body') || document.querySelector('.' + mobileCarousel.planets[mobileCarousel.previousIndex]  + ' video')
    const skewNextPlanet = document.querySelector('.' + mobileCarousel.planets[mobileCarousel.nextIndex]  + ' .planet-body') || document.querySelector('.' + mobileCarousel.planets[mobileCarousel.nextIndex]  + ' video')
    skewActivePlanet.style.cssText = ''
    skewPrevPlanet.style.cssText = ''
    skewNextPlanet.style.cssText = ''

    const deltaX = swipe_det.eX - swipe_det.sX
    const deltaY = swipe_det.eY - swipe_det.sY

    if (deltaX ** 2 + deltaY ** 2 < deltaMin ** 2) return

    if (deltaY === 0 || Math.abs(deltaX / deltaY) > 1)
      direction = deltaX > 0 ? directions.RIGHT : directions.LEFT
    else
      direction = deltaY > 0 ? directions.UP : directions.DOWN

    if (direction && typeof func === 'function') func(el, direction)

    direction = null
  }, false)
}
