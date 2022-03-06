window.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('orientationchange', deviceOrientation);
  deviceOrientation();
});

function deviceOrientation() {
  const root = document.querySelector('.root');
  switch(window.orientation) {
    case 90:
      root.style.display = 'flex'
      setTimeout(function() {
        root.classList.add('rotated');
      }, 20)
      break;
    case -90:
    root.style.display = 'flex'
    setTimeout(function() {
      root.classList.add('rotated');
    }, 20)
      break;
    default:
      root.classList.remove('rotated');
      setTimeout(function() {
        root.style.display = ''
      }, 500)
      break;
  }
}
