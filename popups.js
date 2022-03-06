document.addEventListener("DOMContentLoaded", function() {
  let openPopup = document.querySelectorAll('[data-open-popup]')
  let popupShadow = document.querySelector('.popup-background')
  let popupClose = document.querySelectorAll('[data-close-popup]')
  let transactionPopupBtn = document.querySelectorAll('[data-open-transaction-popup]')

  if (openPopup) { openPopup.forEach(item => item.addEventListener('click', openPopupFunction)) }
  if (popupClose) { popupClose.forEach(item => item.addEventListener('click', closePopupFunction)) }
  if (transactionPopupBtn) { transactionPopupBtn.forEach(popup => popup.addEventListener('click', openTransactionPopup)) }


  function openPopupFunction() {
    let target = document.querySelector('#' + this.getAttribute('data-open-popup'))
    let popupbtn = this
    target.style.display = 'block'
    popupShadow.style.display = 'block'
    setTimeout(function() {
      target.classList.add('show')
      popupShadow.classList.add('show')
    }, 10)
  }
  function closePopupFunction() {
    let target = document.querySelector('#' + this.getAttribute('data-close-popup'))
    let deleteBg = this.getAttribute('data-delete-bg')
    let planetIso = this.getAttribute('data-iso') // for transactions, for deleting a class
    if (deleteBg !== 'false') popupShadow.classList.remove('show')
    target.classList.remove('show')

    setTimeout(function() {
      target.style.display = ''
      if (deleteBg !== 'false') popupShadow.style.display = ''
    }, 500)

    if (this.getAttribute('data-close-popup') === 'transactionPopup') { //If there was a transaction, remove the additional class
      document.querySelector('.root').classList.remove('transaction-confirmed-' + planetIso)
    }

      let btnClose = document.querySelector( `[data-close-popup="${this.getAttribute('data-close-popup')}"]` )
      btnClose.setAttribute('data-active', false)
      btnClose.classList.remove('show')
  }
  function openTransactionPopup() {
    let target = document.querySelector('#' + this.getAttribute('data-open-transaction-popup'))
    let transactionLoader = document.querySelector('#transactionLoaderPopup')
    let planetName = this.getAttribute('data-name')
    let planetIso = this.getAttribute('data-iso')
    let root = document.querySelector('.root')
    let closeTransactionPopupBtn = target.querySelector('.popup-close')

    closeTransactionPopupBtn.setAttribute('data-iso', planetIso)
    transactionLoader.style.display = 'block'
    popupShadow.style.display = 'block'
    setTimeout(function() {
      transactionLoader.classList.add('show')
      popupShadow.classList.add('show')

      // Connect popup congrats after download
      setTimeout(function() {
        transactionLoader.classList.remove('show')
        root.classList.add('transaction-confirmed-' + planetIso)
        target.style.display = 'block'
        target.querySelector('.planet-name').innerHTML = planetName
        setTimeout(function() {
          transactionLoader.style.display = ''
          target.classList.add('show')
        }, 10)
      }, 4000)
    }, 10)
  }
})
