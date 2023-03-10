const form = document.querySelector('form')
const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open(){
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputPeso.value
  const height = inputAltura.value
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  Modal.message.innerHTML = message
  Modal.open()
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}